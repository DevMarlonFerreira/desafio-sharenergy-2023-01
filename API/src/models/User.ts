import mongoose, { Model } from "mongoose";
import { user } from "../interfaces/user"

const schema = new mongoose.Schema<user>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

export const User: Model<user> = mongoose.model("User", schema);
