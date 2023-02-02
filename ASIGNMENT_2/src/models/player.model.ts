var mongoose = require("mongoose");
const { Schema } = mongoose;

const playerSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      require: true,
    },
    age: Number,
    countryId: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Player', playerSchema)