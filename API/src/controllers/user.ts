import { Request, Response } from "express";

import { User } from "../models/User";
import { BcryptService } from "../services/bcrypt";
import { JwtService } from "../services/jwt";

const debug = require("debug")("controller.user.ts"); debug.enabled = true;

export class UserController {
    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const username: string = req.body.username;
            const password: string = req.body.password;

            const result = await User.findOne({ username }).select("-_id -password").lean();
            if (result) {
                return res.status(401).send({
                    code: 409,
                    message: 'O usuário já existe'
                });
            }

            const hash = await BcryptService.hashPassword(password);

            await User.create({ username, password: hash })
                .then((_) => {
                    return res
                        .status(201)
                        .json({ code: 201, message: 'Usuário cadastrado com sucesso' });
                })
                .catch((err) => {
                    debug(err)
                    return res
                        .status(500)
                        .json({ code: 500, message: 'Falha no cadastro de usuário' });
                });

            if (!(await BcryptService.hashPassword(password))) {
                return res.status(401).send({
                    code: 401,
                    message: 'Usuário ou senha inválida'
                });
            }
            const token = JwtService.generateToken({ username });
            return res.status(200).send({ username, token });
        }
        catch (err) {
            debug(err)
            return res
                .status(500)
                .json({ code: 500, message: 'Falha no cadastro de usuário' });
        }
    }
    
    public async authenticate(req: Request, res: Response): Promise<Response> {
        try {
            const username: string = req.headers.username as string;
            const password: string = req.headers.password as string;

            const result = await User.findOne({ username }).select("-_id").lean();
            if (!result) {
                return res.status(401).send({
                    code: 401,
                    message: 'Usuário ou senha inválida'
                });
            }
            if (!(await BcryptService.comparePasswords(password, result.password))) {
                return res.status(401).send({
                    code: 401,
                    message: 'Usuário ou senha inválida'
                });
            }
            const token = JwtService.generateToken({ username });
            return res.status(200).send({ username, token });
        }
        catch (error) {
            debug(error)
            return res
                .status(500)
                .json({ code: 500, message: 'Falha na autenticação de usuário' });
        }
    }
}