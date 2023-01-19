import { Router } from "express";
import { OthersController } from "../controllers/others";

export class OthersRouter {
    public router = Router();
    public path = "/*";
    private others: OthersController;

    constructor() {
        this.others = new OthersController();
        this.setupRoutes();
    }

    private setupRoutes() {
        this.router.all(`${this.path}`, this.others.notFound);
    }
}
