import Error from "../pages/error";

export default class Router {
    constructor () {
        window.onpopstate = this.handleLocation;
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

        try {
            const module = await import("../pages"+path);
            
            new module.default;  
        } catch (error) {
            new Error();
        }
    };
}