
import http from '../api/http.js';

class ItemService {
    constructor() {
        this.cache = new Map();
        this.cacheDuration = 60 * 1000; // 1 minute
    }

    _getCacheKey(endpoint, params) {
        return `${endpoint}:${JSON.stringify(params)}`;
    }

    async getItems({ page = 1, limit = 5, sort = '', order = 'asc', q = '', ...filters }) {
        const params = {
            _page: page,
            _limit: limit,
        };

        if (sort) {
            params._sort = sort;
            params._order = order;
        }

        if (q) {
            params.q = q;
        }

        // Add other filters
        Object.keys(filters).forEach(key => {
            if (filters[key]) {
                params[key] = filters[key];
            }
        });

        const cacheKey = this._getCacheKey('/projects', params);
        if (this.cache.has(cacheKey)) {
            const { data, timestamp } = this.cache.get(cacheKey);
            if (Date.now() - timestamp < this.cacheDuration) {
                console.log('Returning cached data');
                return data;
            }
            this.cache.delete(cacheKey);
        }

        try {
            const response = await http.get('/projects', { params });
            const totalCount = response.headers['x-total-count'];
            const result = {
                data: response.data,
                total: parseInt(totalCount, 10),
                page,
                limit
            };

            this.cache.set(cacheKey, { data: result, timestamp: Date.now() });
            return result;
        } catch (error) {
            console.error('Error fetching items:', error);
            throw error;
        }
    }

    async getItem(id) {
        const cacheKey = this._getCacheKey(`/projects/${id}`, {});
        if (this.cache.has(cacheKey)) {
            const { data, timestamp } = this.cache.get(cacheKey);
            if (Date.now() - timestamp < this.cacheDuration) {
                return data;
            }
        }

        try {
            const response = await http.get(`/projects/${id}`);
            this.cache.set(cacheKey, { data: response.data, timestamp: Date.now() });
            return response.data;
        } catch (error) {
            console.error(`Error fetching item ${id}:`, error);
            throw error;
        }
    }

    async createItem(item) {
        try {
            const response = await http.post('/projects', item);
            this.cache.clear(); // Invalidate cache on mutation
            return response.data;
        } catch (error) {
            console.error('Error creating item:', error);
            throw error;
        }
    }

    async updateItem(id, updates) {
        try {
            const response = await http.patch(`/projects/${id}`, updates);
            this.cache.clear(); // Invalidate cache
            return response.data;
        } catch (error) {
            console.error(`Error updating item ${id}:`, error);
            throw error;
        }
    }

    // For optimistic updates, we don't invalidate immediately but might want to update local cache
    async optimisticallyUpdateItem(id, updates) {
        // Logic can be expanded, for now just calling update
        return this.updateItem(id, updates);
    }
}

export default new ItemService();
