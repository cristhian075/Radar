import { Schema, model } from 'mongoose';



const DataSchema = new Schema({

    nombre:String,
    latitude: String,
    longitude: String,

}, {
    versionKey: false
})

export default model("Data", DataSchema);