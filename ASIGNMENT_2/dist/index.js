"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const nation_route_1 = __importDefault(require("./src/routes/nation.route"));
const app = (0, express_1.default)();
dotenv_1.default.config();
// view engine setup
app.set("views", path_1.default.join(__dirname, "views"));
// app.set('view engine', 'jade');
app.set("view engine", "ejs");
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
// app.use(express.static(path.join(__dirname, "public")));
app.use(body_parser_1.default.json());
app.use((0, morgan_1.default)("dev"));
//route
app.use("/nation", nation_route_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
//set-up db
mongoose_1.default.set("strictQuery", false);
mongoose_1.default
    .connect(process.env.DB_URL, {
    dbName: "asignment-2",
    autoIndex: true
})
    .then(() => {
    console.log("DMCS ===> Connect thanh cong");
})
    .catch((error) => {
    console.log("Loi roi ne ==>", error);
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
app.listen(process.env.PORT, () => {
    console.log(`Server running at ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map