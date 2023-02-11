"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./config/app");
const database_1 = require("./config/database");
(0, app_1.app)();
(0, database_1.connectDB)();
//# sourceMappingURL=index.js.map