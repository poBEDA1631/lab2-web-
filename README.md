# SCSS Architecture & JS SPA Project

This project demonstrates a robust SCSS architecture following the 7-1 pattern and a JS-based SPA implementation for the Projects section.

## Features

### Architecture (7-1 Pattern)
The SCSS is organized into the following folders:
- `abstracts/`: Variables, mixins, functions.
- `base/`: Reset, typography, utilities, animations.
- `components/`: BEM components (buttons, cards, nav, images).
- `layout/`: Grid system, header, footer.
- `pages/`: Page-specific styles.

### JS Interactivity (Lab 4)
The **Projects** page has been converted to a Single Page Application (SPA) using vanilla JavaScript.

1.  **API Integration**:
    - Data fetched from `json-server` (mock API) via `API/http.js` (Axios wrapper).
    - Endpoints: `GET /projects`, `GET /projects/:id`, `POST /projects`, `PATCH /projects/:id`.

2.  **Architecture**:
    - **Services**: `ItemService.js` handles data fetching, caching (in-memory with 1 min TTL), and optimistic updates.
    - **Components**: `ListView.js` (List, Filter, Sort, Pagination) and `ItemView.js` (Details, Create Form).
    - **Router**: `router.js` implements a custom hash-based router (`#/list`, `#/item/:id`, `#/create`) with URL state synchronization for filters.

3.  **Functionality**:
    - **List View**: Server-side sorting, filtering, and pagination.
    - **Search**: Integrated search bar updating URL query parameters.
    - **Optimistic Updates**: "Like" button updates UI immediately before server confirmation.
    - **Forms**: Create Project form with HTML5 validation (required, minlength).

## Usage

### Setup
Install dependencies:
```bash
npm install
```

### Running the Application
You need to run both the web server (Express) and the API server (json-server).

1. Start API Server:
```bash
npm run server:api
```

2. Start Web Server:
```bash
npm start
```

3. Visit `http://localhost:3000/projects`.

### SCSS Compilation
To compile SCSS:
```bash
npm run scss
```
To watch for changes:
```bash
npm run watch:scss
```
