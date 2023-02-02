import mongoose from "mongoose";

const { Schema } = mongoose

export interface NationModel {
    name: String,
    img: String
}

const nationSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
            unique: true
        },
        img: {
            type: String
        },

    },
    {
        timestamps: true
    }
);

export const Nation = mongoose.model('Nation', nationSchema)
