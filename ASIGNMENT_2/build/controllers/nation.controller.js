"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNationById = exports.deleteNationById = exports.getNationById = exports.createNation = exports.getAllNation = void 0;
const NationService = __importStar(require("services/nation.service"));
const getAllNation = async (_req, res) => {
    const response = await NationService.findAll();
    return res.status(200).json(response);
};
exports.getAllNation = getAllNation;
const createNation = async (req, res) => {
    const payload = {
        name: req.body.name,
        description: req.body.description
    };
    return res.status(200).json(await NationService.create(payload));
};
exports.createNation = createNation;
const getNationById = async (req, res) => {
    const id = req.params["id"];
    const response = await NationService.findById(id);
    return res.status(200).json(response);
};
exports.getNationById = getNationById;
const deleteNationById = async (req, res) => {
    const id = req.params["id"];
    return res.status(200).json(await NationService.deleteById(id));
};
exports.deleteNationById = deleteNationById;
const updateNationById = async (req, res) => {
    const payload = {
        name: req.body.name,
        description: req.body.description
    };
    const id = req.params["id"];
    return res.status(200).json(await NationService.updateById(id, payload));
};
exports.updateNationById = updateNationById;
//# sourceMappingURL=nation.controller.js.map