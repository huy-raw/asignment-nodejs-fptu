import { roleEnum } from "@/common/common"
import mongoose, { Schema } from "mongoose"

export interface IUser {
    name: string,
    email: string,
    password: string
    role: string
}

const userSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            unique: true,
            require: true
        },
        password: {
            type: String,
            required: true,
            min: 6,
            max: 256
        },
        role: {
            type: String,
            enum: roleEnum,
            default: roleEnum.USER
        }
    },
    {
        timestamps: true
    }
)



export const Player = mongoose.model('users', userSchema)