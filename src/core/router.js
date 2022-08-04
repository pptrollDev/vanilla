export default class Router {
    routes;

    constructor (routes) {
        this.routes = routes;
        window.onpopstate = this.handleLocation;
        window.route = this.route;
        this.handleLocation();
    }

    route(event) {
        event = event || window.event;
        event.preventDefault();
        window.history.pushState({}, '', event.target.href);
        this.handleLocation();
    };

    handleLocation = async () => {
        const path = window.location.pathname;
        const route = this.routes[path] || this.routes[404];
        const html = await fetch(route).then((data) => data.text());
        document.getElementById('main-page').innerHTML = html;
    };
}