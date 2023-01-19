import { Router } from "express";
import { HttpCatController } from "../controllers/httpcat";

export class HttpCatRouter {
    public router = Router();
    public path = "/httpcat";
    private httpCat: HttpCatController;

    constructor() {
        this.httpCat = new HttpCatController();
        this.setupRoutes();
    }

    private setupRoutes() {
        this.router.get(`${this.path}`, this.httpCat.get);
    }
}
