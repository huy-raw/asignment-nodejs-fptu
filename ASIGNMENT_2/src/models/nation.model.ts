import mongoose, { Schema } from "mongoose"

export interface INation {
    name: string;
    description: string;
}

const nationSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
            unique: true,
        },
        description: {
            type: String
        }
    },
    {
        timestamps: true,
        autoIndex: true
    }
)



export const Nation = mongoose.model('Nation', nationSchema)


