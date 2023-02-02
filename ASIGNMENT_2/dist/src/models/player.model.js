"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const playerSchema = new Schema({
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
}, {
    timestamps: true,
});
exports.Player = mongoose_1.default.model('Player', playerSchema);
//# sourceMappingURL=player.model.js.map