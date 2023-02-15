import mongoose, { Document, Schema } from "mongoose"

export interface INation extends Document{
    name: string;
    description: string;
}

const nationSchema: Schema<INation> = new Schema(
    {
        name: {
            type: String,
            require: true,
            uniqued: true,
            trim: true
        },
        description: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true,
        autoIndex: true
    }
)



export const Nation = mongoose.model<INation>('nations', nationSchema)


