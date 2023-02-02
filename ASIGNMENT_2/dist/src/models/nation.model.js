"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nation = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const nationSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    img: {
        type: String
    },
}, {
    timestamps: true
});
exports.Nation = mongoose_1.default.model('Nation', nationSchema);
//# sourceMappingURL=nation.model.js.map