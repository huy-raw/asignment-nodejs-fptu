import * as mongoose from "mongoose"
require('dotenv').config()


const dbName = "asignment_2"


const connectDB = async () => {
    mongoose.set('strictQuery', false);
    return mongoose.connect(`${process.env["DB_URL"]}`, {
        dbName: dbName
    })
        .then(async () => {
            console.log('connectDB ======> Successfully');
        }).catch((err: any) => {
            console.log('connectDB ======> ', err.message);
        })
}

export {
    connectDB
}