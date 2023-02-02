
import mongoose from "mongoose";
import { NationModel } from "./nation.model";

const { Schema } = mongoose;

export interface PlayerSchema {
  name: String,
  nation: NationModel,
  img: String
}

const playerSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    nation: {
      type: Schema.Types.ObjectId,
      ref: 'Nation'
    },
    img: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

export const Player = mongoose.model('Player', playerSchema)
