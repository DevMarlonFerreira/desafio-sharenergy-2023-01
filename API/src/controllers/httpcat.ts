import { Request, Response } from "express";
import { HttpCatService } from "../services/httpCat";

const debug = require("debug")("controller.httpCat.ts"); debug.enabled = true;
const httpCatService = new HttpCatService();

export class HttpCatController {
    public async get(req: Request, res: Response): Promise<Response> {
        try {
            const status_code = req.query.status_code as string;
            const httpcat = await httpCatService.get(status_code);

            return res.status(200).send(httpcat);
        }
        catch (error) {
            const httpcat = await httpCatService.get("418");

            return res.status(200)
                .json({ code: 200, data: httpcat })
        }
    }
}