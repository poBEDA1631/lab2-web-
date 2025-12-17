
import itemService from '../services/ItemService.js';

export default class ListView {
    constructor(containerId, router) {
        this.container = document.getElementById(containerId);
        this.router = router;
        this.state = {
            items: [],
            total: 0,
            loading: false,
            error: null,
            params: {
                page: 1,
                limit: 5,
                q: '',
                sort: '',
                order: 'asc'
            }
        };
    }

    async init(params = {}) {
        this.state.params = { ...this.state.params, ...params };
        await this.fetchItems();
    }

    async fetchItems() {
        this.state.loading = true;
        this.render();

        try {
            const result = await itemService.getItems(this.state.params);
            this.state.items = result.data;
            this.state.total = result.total;
        } catch (error) {
            this.state.error = 'Failed to load projects.';
        } finally {
            this.state.loading = false;
            this.render();
        }
    }

    handleSearch(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const query = formData.get('q');
        this.updateParams({ q: query, page: 1 });
    }

    handleSort(field) {
        const order = (this.state.params.sort === field && this.state.params.order === 'asc') ? 'desc' : 'asc';
        this.updateParams({ sort: field, order });
    }

    updateParams(newParams) {
        this.state.params = { ...this.state.params, ...newParams };
        // Sync with URL via Router
        this.router.updateUrl(this.state.params);
        this.fetchItems();
    }

    render() {
        if (this.state.loading) {
            this.container.innerHTML = '<div class="text-center">Loading...</div>';
            return;
        }

        if (this.state.error) {
            this.container.innerHTML = `<div class="alert alert-danger">${this.state.error}</div>`;
            return;
        }

        const listHtml = this.state.items.map(item => `
            <li class="card mb-3 project-card" onclick="window.location.hash = '#/item/${item.id}'" style="cursor: pointer;">
                <div class="card__content d-flex" style="justify-content: space-between; align-items: center;">
                    <div>
                        <span class="card__title">${item.name}</span>
                        <div><small>${item.client}</small></div>
                    </div>
                    <div class="d-flex" style="gap: 2rem; align-items: center;">
                        <span class="project-card__status project-card__status--${item.status.toLowerCase() === 'active' ? 'active' : 'completed'}">${item.status}</span>
                        <span style="font-weight: bold;">${item.totalTime}</span>
                         <span>⭐ ${item.rating} (${item.likes})</span>
                    </div>
                </div>
            </li>
        `).join('');

        this.container.innerHTML = `
            <h2 class="mb-3">Projects</h2>
            <section class="card mb-4">
                <div class="card__content search-bar">
                    <form id="search-form" class="d-flex" style="gap: 1rem; align-items: center;">
                        <input type="search" name="q" value="${this.state.params.q}" placeholder="Search projects..." class="p-1" style="flex: 1; border: 1px solid #ccc; border-radius: 4px;">
                        <select id="sort-select" class="p-1" style="border: 1px solid #ccc; border-radius: 4px;">
                            <option value="">Sort By</option>
                            <option value="name" ${this.state.params.sort === 'name' ? 'selected' : ''}>Name</option>
                            <option value="rating" ${this.state.params.sort === 'rating' ? 'selected' : ''}>Rating</option>
                        </select>
                         <button type="submit" class="btn btn--primary">Search</button>
                        <button type="button" class="btn btn--secondary" onclick="window.location.hash = '#/create'">New Project</button>
                    </form>
                </div>
            </section>

             <section>
                <div class="row">
                    <div class="col-12">
                        <ol class="p-0">
                            ${listHtml}
                        </ol>
                    </div>
                </div>
                 <div id="pagination-controls" class="d-flex justify-content-center mt-3" style="gap: 0.5rem;">
                    ${this.renderPagination()}
                </div>
            </section>
        `;

        // Re-attach events
        document.getElementById('search-form').addEventListener('submit', (e) => this.handleSearch(e));
        document.getElementById('sort-select').addEventListener('change', (e) => this.handleSort(e.target.value));
    }

    renderPagination() {
        const totalPages = Math.ceil(this.state.total / this.state.params.limit);
        let buttons = '';

        if (this.state.params.page > 1) {
            buttons += `<button class="btn btn--secondary" onclick="window.app.listView.updateParams({page: ${this.state.params.page - 1}})">Prev</button>`;
        }

        buttons += `<span class="p-2">Page ${this.state.params.page} of ${totalPages}</span>`;

        if (this.state.params.page < totalPages) {
            buttons += `<button class="btn btn--secondary" onclick="window.app.listView.updateParams({page: ${this.state.params.page + 1}})">Next</button>`;
        }
        return buttons;
    }
}
