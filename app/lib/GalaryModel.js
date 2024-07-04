import mongoose from "mongoose";
import { dbConnect } from "./dbConnect";

dbConnect();
const galarySchema = new mongoose.Schema({
    files:{
        type:[String],
        required:[true , "Files url not found!"]
    },
})


export const Galary = mongoose.models.Galary || mongoose.model("Galary" , galarySchema);