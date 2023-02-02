import * as dotenv from 'dotenv';
import * as path from "path";

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, "../config/config.env") });


// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all
interface ENV {
    DB_URL: string | undefined,
    PORT: number | undefined
}


interface Config {
    PORT: number;
    DB_URL: string;
}

//Loading process.env as ENV interface

const getConfig = (): ENV => {
    return {
        PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
        DB_URL: process.env.DB_URL
    };
}

// Throwing an Error if any field was undefined we don't 
// want our app to run if it can't connect to DB and ensure 
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type 
// definition.

const getSanitzedConfig = (config: ENV): Config => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
            throw new Error(`Missing key ${key} in config.env`);
        }
    }
    return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
