import { Request, Response } from "express";

export class OthersController {
    public notFound(
        _: Request,
        res: Response
    ): Response {
        return res.status(418).json({
            code: 418,
            message: "I'm a teapot",
        });
    }
}
