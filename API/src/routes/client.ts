import { Router } from "express";
import { ClientController } from "../controllers/client";

export class ClientRouter {
    public router = Router();
    public path = "/client";
    private client: ClientController;

    constructor() {
        this.client = new ClientController();
        this.setupRoutes();
    }

    private setupRoutes() {
        this.router.get(`${this.path}`, this.client.getAll);
        this.router.post(`${this.path}`, this.client.post);
        this.router.patch(`${this.path}`, this.client.patch);
        this.router.delete(`${this.path}/:id`, this.client.delete);
    }
}
