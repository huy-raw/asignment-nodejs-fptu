import mongoose, { Schema, Types } from "mongoose"
import { positionEnum } from '@/common/common';


export interface IPlayer {
    name: string,
    image: string,
    club: string,
    position: string,
    goals: number,
    isCaptain: boolean,
    nation: Types.ObjectId
}

const playerSchema = new Schema(
    {
        name: {
            type: String,
            max: 255,
            required: [true, "Name can not be blank"]
        },
        image: {
            type: String
        },
        club: {
            type: String,
            max: 255,
            required: true
        },
        posision: {
            type: String,
            enum: positionEnum,
            required: true
        },
        goals: {
            type: Number,
            min: 0,
            default: 0
        },
        isCaptain: {
            type: Boolean,
            default: false
        },
        nation: {
            type: Schema.Types.ObjectId,
            ref: 'nations',
            required: ['true', 'Player must be have nation']
        }
    },
    {
        timestamps: true
    }
)


export const Player = mongoose.model('players', playerSchema)
