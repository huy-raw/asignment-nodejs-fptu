import { app } from "./config/app";
import { connectDB } from "./config/database";
import {openAPIClient} from "./config/openApiClienConfig"


app()
connectDB()
// openAPIClient()
