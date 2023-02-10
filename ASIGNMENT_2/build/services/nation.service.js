"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOne = exports.deleteOne = exports.create = exports.findById = exports.findAll = void 0;
const nation_model_1 = require("@/models/nation.model");
const findAll = async () => {
    try {
        return await nation_model_1.Nation.find();
    }
    catch (error) {
        console.log(error);
    }
};
exports.findAll = findAll;
const findById = async (id) => {
    try {
        return await nation_model_1.Nation.findById({ _id: id });
    }
    catch (error) {
        console.log(error);
    }
};
exports.findById = findById;
const create = async (payload) => {
    try {
        const response = await nation_model_1.Nation.create(payload);
        return response;
    }
    catch (error) {
        console.log(error);
    }
};
exports.create = create;
const deleteOne = async (id) => {
    try {
        return nation_model_1.Nation.deleteOne({ _id: id });
    }
    catch (error) {
        console.log(error);
    }
};
exports.deleteOne = deleteOne;
const updateOne = async (id, payload) => {
    try {
        return nation_model_1.Nation.where({ _id: id }).update({
            name: payload.name,
            description: payload.description
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.updateOne = updateOne;
//# sourceMappingURL=nation.service.js.map