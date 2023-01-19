import { Router } from "express";
import { RandomDogController } from "../controllers/randomdog";

export class RandomDogRouter {
    public router = Router();
    public path = "/randomdog";
    private randomDog: RandomDogController;

    constructor() {
        this.randomDog = new RandomDogController();
        this.setupRoutes();
    }

    private setupRoutes() {
        this.router.get(`${this.path}`, this.randomDog.get);
    }
}
