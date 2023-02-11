"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateById = exports.deleteById = exports.create = exports.findById = exports.findAll = void 0;
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
        return await nation_model_1.Nation.create(payload);
    }
    catch (error) {
        console.log(error);
    }
};
exports.create = create;
const deleteById = async (id) => {
    try {
        return nation_model_1.Nation.deleteOne({ _id: id });
    }
    catch (error) {
        console.log(error);
    }
};
exports.deleteById = deleteById;
const updateById = async (id, payload) => {
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
exports.updateById = updateById;
//# sourceMappingURL=nation.service.js.map