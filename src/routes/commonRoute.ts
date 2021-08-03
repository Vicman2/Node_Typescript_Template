import express from 'express';
export abstract class CommonRoutesConfig {
    router: express.Router;
    name: string;

    constructor(router: express.Router, name: string) {
        this.router = router;
        this.name = name;
        this.configureRoutes();
    }
    getName() {
        return this.name;
    }
    abstract configureRoutes(): express.Router;
}