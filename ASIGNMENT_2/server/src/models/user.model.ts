import { roleEnum } from "@/common/common"
import mongoose, { Document, Schema } from "mongoose"

export interface IUser extends Document {
    name: string,
    email: string,
    password: string
    role: string,
    refeshToken?: string
}

const userSchema: Schema<IUser> = new Schema(
    {
        name: {
            type: String,
            require: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            require: true,
            trim: true
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
        },
        refeshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }
)


export const User = mongoose.model<IUser>('users', userSchema)