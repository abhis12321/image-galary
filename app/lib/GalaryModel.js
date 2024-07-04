import mongoose from "mongoose";

const galarySchema = new mongoose.Schema({
    files:{
        type:[String],
        required:[true , "Files url not found!"]
    },
})


export const Galary = mongoose.models.Galary || mongoose.model("Galary" , galarySchema);