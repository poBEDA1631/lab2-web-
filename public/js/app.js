
import Router from './router.js';
import ListView from './components/ListView.js';
import ItemView from './components/ItemView.js';

class App {
    constructor() {
        this.router = new Router();
        this.listView = new ListView('app', this.router);
        this.itemView = new ItemView('app', this.router);
        this.init();
    }

    init() {
        // Define Routes
        this.router.addRoute('/list', (params) => {
            this.listView.init(params);
        });

        this.router.addRoute('/create', () => {
            this.itemView.init(null);
        });

        this.router.addRoute('/item/:id', (params, id) => {
            this.itemView.init(id);
        });

        // Expose app for debugging
        window.app = this;

        // Initial route check
        this.router.handleRoute();
    }
}

new App();
