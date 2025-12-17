
import ListView from './components/ListView.js';
import ItemView from './components/ItemView.js';

export default class Router {
    constructor() {
        this.routes = {};
        this.currentView = null;
        window.addEventListener('hashchange', () => this.handleRoute());
    }

    addRoute(pattern, handler) {
        this.routes[pattern] = handler;
    }

    handleRoute() {
        const hash = window.location.hash.slice(1) || '/list';
        const [path, queryString] = hash.split('?');
        const urlParams = new URLSearchParams(queryString);
        const params = Object.fromEntries(urlParams.entries());

        // Simple regex matching for routes like /item/:id
        let matched = false;

        for (const [pattern, handler] of Object.entries(this.routes)) {
            const regex = new RegExp('^' + pattern.replace(/:[^\s/]+/g, '([\\w-]+)') + '$');
            const match = path.match(regex);

            if (match) {
                matched = true;
                const args = match.slice(1);
                handler(params, ...args);
                break;
            }
        }

        if (!matched) {
            console.warn('No route matched for:', path);
            // Default to list
            window.location.hash = '#/list';
        }
    }

    updateUrl(params) {
        const hash = window.location.hash.split('?')[0];
        const queryString = new URLSearchParams(params).toString();

        // Use history.replaceState to update URL without triggering hashchange and re-rendering fully
        // But our Router listens to hashchange, so this is tricky. 
        // Better: Just update hash.
        const newHash = `${hash}?${queryString}`;
        if (window.location.hash.slice(1) !== newHash) {
            // To prevent infinite loop/re-fetch if we are just syncing state,
            // we could use a flag, but for now simple hash update is fine.
            // Ideally we want to update URL silently.
            history.replaceState(null, '', `#${newHash}`);
        }
    }
}
