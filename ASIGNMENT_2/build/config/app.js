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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const nation_route_1 = __importDefault(require("@/routes/nation.route"));
const player_route_1 = __importDefault(require("@/routes/player.route"));
const express_1 = __importDefault(require("express"));
const path = __importStar(require("path"));
require('dotenv').config();
const app = () => {
    const app = (0, express_1.default)();
    const port = process.env['PORT'] || 8080;
    //set up view engine
    app.set("views", path.join(__dirname, "../views"));
    app.set('view engine', 'ejs');
    app.use('/static', express_1.default.static(path.join(__dirname, "../public")));
    app.get('/policy', (_req, res) => {
        var links = [
            { href: 'https://www.facebook.com/', text: 'Facebook' },
            { href: 'https://viblo.asia/', text: 'Viblo' },
        ];
        res.render('policy', {
            links
        });
    });
    app.get('/', (_req, res) => {
        // res.render('index');
        res.status(200).json("OK");
    });
    app.use('/nations', nation_route_1.default);
    app.use('/players', player_route_1.default);
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.listen(port, () => {
        return console.log(`Express is listening at http://localhost:${port}`);
    });
};
exports.app = app;
//# sourceMappingURL=app.js.map