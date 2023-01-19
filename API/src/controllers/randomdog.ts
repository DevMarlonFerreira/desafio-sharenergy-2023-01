import { Request, Response } from "express";
import { RandomDogService } from "../services/randomDog";

const debug = require("debug")("controller.randomDog.ts"); debug.enabled = true;
const randomDogService = new RandomDogService();

export class RandomDogController {
    public async get(_: Request, res: Response): Promise<Response> {
        try {
            const randomDog = await randomDogService.get();
            return res.status(200)
                .json({ code: 200, data: randomDog.url });
        }
        catch (error) {
            return res
                .status(500)
                .json({ code: 500, message: 'Falha na consulta de RandomDog' });
        }
    }
}