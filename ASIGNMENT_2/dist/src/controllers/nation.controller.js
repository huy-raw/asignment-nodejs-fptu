"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NationController = void 0;
const nation_model_1 = require("models/nation.model");
exports.NationController = {
    getAll: async (req, res) => {
        try {
            const nation = nation_model_1.Nation.find();
            return res.status(200).json(nation);
        }
        catch (error) {
            return res.status(404).json(error);
        }
    },
    create: async (req, res) => {
        try {
            const data = req.body;
            console.log(data);
            await nation_model_1.Nation.create(data);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
//# sourceMappingURL=nation.controller.js.map