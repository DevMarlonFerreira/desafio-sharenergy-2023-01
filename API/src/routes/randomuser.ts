import { Router } from "express";
import { RandomUserController } from "../controllers/randomuser";

export class RandomUserRouter {
    public router = Router();
    public path = "/randomuser";
    private randomUser: RandomUserController;

    constructor() {
        this.randomUser = new RandomUserController();
        this.setupRoutes();
    }

    private setupRoutes() {
        this.router.get(`${this.path}`, this.randomUser.get);
    }
}
