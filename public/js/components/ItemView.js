
import itemService from '../services/ItemService.js';

export default class ItemView {
    constructor(containerId, router) {
        this.container = document.getElementById(containerId);
        this.router = router;
        this.state = {
            item: null,
            loading: false,
            error: null,
            mode: 'view' // 'view' or 'create'
        };
    }

    async init(id) {
        if (!id) {
            this.state.mode = 'create';
            this.state.item = { name: '', client: '', status: 'Active', description: '', rating: 0, likes: 0 };
            this.render();
        } else {
            this.state.mode = 'view';
            await this.fetchItem(id);
        }
    }

    async fetchItem(id) {
        this.state.loading = true;
        this.render();
        try {
            this.state.item = await itemService.getItem(id);
        } catch (error) {
            this.state.error = 'Failed to load project details.';
        } finally {
            this.state.loading = false;
            this.render();
        }
    }

    async handleLike() {
        // Optimistic UI update
        const originalLikes = this.state.item.likes;
        this.state.item.likes++;
        this.render(); // Re-render immediately

        try {
            await itemService.optimisticallyUpdateItem(this.state.item.id, { likes: this.state.item.likes });
        } catch (error) {
            // Revert on error
            this.state.item.likes = originalLikes;
            this.render();
            alert('Failed to update likes');
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        // Basic conversion
        data.rating = parseInt(data.rating, 10);
        data.likes = 0; // Default

        // Local validation (HTML5 handles most, but we can add custom logic here)

        try {
            await itemService.createItem(data);
            alert('Project created!');
            window.location.hash = '#/list';
        } catch (error) {
            alert('Failed to create project.');
        }
    }

    render() {
        if (this.state.loading) {
            this.container.innerHTML = '<div class="text-center">Loading...</div>';
            return;
        }

        if (this.state.error) {
            this.container.innerHTML = `<div class="alert alert-danger">${this.state.error}</div> <button class="btn btn--secondary" onclick="window.history.back()">Back</button>`;
            return;
        }

        if (this.state.mode === 'create') {
            this.container.innerHTML = `
                <h2 class="mb-3">New Project</h2>
                <form id="create-form" class="card p-3">
                    <div class="mb-3">
                        <label class="d-block mb-1">Project Name *</label>
                        <input type="text" name="name" required minlength="3" class="p-1 w-100" style="border: 1px solid #ccc;">
                    </div>
                    <div class="mb-3">
                        <label class="d-block mb-1">Client *</label>
                        <input type="text" name="client" required class="p-1 w-100" style="border: 1px solid #ccc;">
                    </div>
                     <div class="mb-3">
                        <label class="d-block mb-1">Status</label>
                        <select name="status" class="p-1 w-100" style="border: 1px solid #ccc;">
                            <option value="Active">Active</option>
                            <option value="Completed">Completed</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                      <div class="mb-3">
                        <label class="d-block mb-1">Total Time</label>
                        <input type="text" name="totalTime" placeholder="e.g. 10h" class="p-1 w-100" style="border: 1px solid #ccc;">
                    </div>
                     <div class="mb-3">
                        <label class="d-block mb-1">Description</label>
                        <textarea name="description" class="p-1 w-100" style="border: 1px solid #ccc;"></textarea>
                    </div>
                     <div class="mb-3">
                        <label class="d-block mb-1">Rating (0-5)</label>
                        <input type="number" name="rating" min="0" max="5" value="0" class="p-1" style="border: 1px solid #ccc;">
                    </div>
                    <div class="d-flex" style="gap: 1rem;">
                        <button type="submit" class="btn btn--primary">Save</button>
                        <button type="button" class="btn btn--secondary" onclick="window.history.back()">Cancel</button>
                    </div>
                </form>
            `;
            document.getElementById('create-form').addEventListener('submit', (e) => this.handleSubmit(e));
        } else {
            // View Mode
            const { id, name, client, status, description, rating, likes, totalTime } = this.state.item;
            this.container.innerHTML = `
                <div class="mb-3">
                    <button class="btn btn--secondary" onclick="window.location.hash = '#/list'">&larr; Back to List</button>
                </div>
                <article class="card p-4">
                    <header class="mb-3 d-flex justify-content-between align-items-center">
                        <h2 class="m-0">${name}</h2>
                         <span class="project-card__status project-card__status--${status.toLowerCase() === 'active' ? 'active' : 'completed'}">${status}</span>
                    </header>
                    <div class="mb-3 text-muted">Client: ${client} | Time: ${totalTime}</div>
                    <div class="mb-4">
                        <p>${description || 'No description provided.'}</p>
                    </div>
                    <footer class="d-flex align-items-center" style="gap: 2rem;">
                        <div>
                             <strong>Rating:</strong> ${'⭐'.repeat(rating)}
                        </div>
                         <div class="d-flex align-items-center" style="gap: 0.5rem;">
                             <button id="like-btn" class="btn btn--secondary">👍 Like</button>
                             <span>${likes} Likes</span>
                        </div>
                    </footer>
                </article>
             `;
            document.getElementById('like-btn').addEventListener('click', () => this.handleLike());
        }
    }
}
