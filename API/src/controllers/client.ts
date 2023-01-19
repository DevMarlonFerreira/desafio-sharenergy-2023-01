import { Request, Response } from "express";
import { Client } from "../models/Client";

const debug = require("debug")("controller.client.ts"); debug.enabled = true;

export class ClientController {
    public async getAll(_: Request, res: Response): Promise<Response> {
        try {
            const clients = await Client.find().lean();
            return res
                .status(200)
                .json({ code: 200, data: clients });
        }
        catch (error) {
            return res
                .status(500)
                .json({ code: 500, message: 'Falha na consulta de clients' });
        }
    }

    public async post(req: Request, res: Response): Promise<Response> {
        try {
            await Client.create(req.body);
            return res
                .status(201)
                .json({ code: 201, message: 'Client cadastrado com sucesso' });
        }
        catch (error) {
            return res
                .status(500)
                .json({ code: 500, message: 'Falha no cadastro de client' });
        }
    }

    public async patch(req: Request, res: Response): Promise<Response> {
        try {
            const body = req.body;
            const client = await Client.updateOne({ cpf: body.cpf }, body, { new: true });
            return res
                .status(200)
                .json({ code: 200, message: 'Client atualizado com sucesso', data: client });
        }
        catch (error) {
            return res
                .status(500)
                .json({ code: 500, message: 'Falha na atualização de client' });
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id;
            await Client.deleteOne({ _id: id });
            return res
                .status(201)
                .json({ code: 201, message: 'Client removido com sucesso' });
        }
        catch (error) {
            return res
                .status(500)
                .json({ code: 500, message: 'Falha na remoção de client' });
        }
    }
}