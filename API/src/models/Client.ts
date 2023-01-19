import mongoose, { Model } from "mongoose";
import { client } from "../interfaces/client"

const schema = new mongoose.Schema<client>({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    endereco : {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    }
})

export const Client: Model<client> = mongoose.model("Cient", schema);
