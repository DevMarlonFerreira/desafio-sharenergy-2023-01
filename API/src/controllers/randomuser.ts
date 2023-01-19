import { Request, Response } from "express";

import { RandomUserService } from "../services/randomuser";

const debug = require("debug")("controller.randomuser.ts"); debug.enabled = true;

const randomUserService = new RandomUserService();

export class RandomUserController {
    public async get(req: Request, res: Response): Promise<Response> {
        try {
            const name = req.query.name as string;
            const email = req.query.email as string;
            const username = req.query.username as string;
            const results = req.query.results as string;
            const page = req.query.page as string;

            const randomUsers = await randomUserService.get(name, email, username, results, page);
            
            if (randomUsers.data.info.results > 0) {
                const users: any = [];
                randomUsers.data.results.map((randomUser) => {
                    users.push({
                        name: `${randomUser.name.title} ${randomUser.name.first} ${randomUser.name.last}`,
                        email: randomUser.email,
                        username: randomUser.login.username,
                        picture: randomUser.picture.medium,
                        age: randomUser.dob.age,
                    })
                })

                return res.status(200)
                    .json({ code: 200, data: users });
            }
            else
                return res
                    .status(404)
                    .json({ code: 404, message: 'RandomUser não encontrado' });
        }
        catch (error) {
            debug(error)
            return res
                .status(500)
                .json({ code: 500, message: 'Falha na consulta de randomUsers' });
        }
    }
}

// foto do usuário, nome completo, email, username e idade