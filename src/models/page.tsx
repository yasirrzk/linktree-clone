import { model, models, Schema } from "mongoose";

const PageSchema = new Schema({
    uri: {type: String, required: true, min: 1, unique: true},
    owner : {type: String, required: true},
}, {timestamps: true})

export const page = models?.page || model('page', PageSchema)