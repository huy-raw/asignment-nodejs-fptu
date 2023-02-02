"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nation_controller_1 = require("controllers/nation.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", nation_controller_1.NationController.getAll);
router.post("/", nation_controller_1.NationController.create);
exports.default = router;
//# sourceMappingURL=nation.route.js.map