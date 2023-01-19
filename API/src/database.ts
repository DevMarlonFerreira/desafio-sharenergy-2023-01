import mongoose, { Mongoose } from "mongoose";
const debug = require("debug")("database.ts"); debug.enabled = true;

const URL = "mongodb://root:admin@localhost:27017/sharenergy?authSource=admin";
const options: Record<string, unknown> = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true
}

export const connect = async (): Promise<Mongoose | void> => {
    mongoose.set('strictQuery', true);
    return await mongoose.connect(URL, options)
        .then(() =>
            debug('Mongodb connected')
        )
        .catch((err) =>
            debug('Erro ao tentar se conectar ao DB: ' + err)
        );
}

export const close = (): Promise<void> => mongoose.connection.close();
