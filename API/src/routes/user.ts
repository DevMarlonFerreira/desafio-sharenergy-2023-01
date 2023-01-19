import { Router } from "express";
import { UserController } from "../controllers/user";

export class UserRouter {
    public router = Router();
    public path = "/user";
    private user: UserController;

    constructor() {
        this.user = new UserController();
        this.setupRoutes();
    }

    private setupRoutes() {
        this.router.get(`${this.path}/auth`, this.user.authenticate);
    }
}
