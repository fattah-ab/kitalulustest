const mongoose = require("mongoose");
const { Schema } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");

const questionSchema = new Schema({
    question: {
        type: String,
    },
    createdBy: {
        type: String,
        trim: true,
        default: "anonymous"
    },
    updatedBy: {
        type: String,
        trim: true,
        default: "anonymous"
    },
    iaActive: {
        type: boolean,
    }   
}, { timestamps: true, versionKey: false });

// unique validator
questionSchema.plugin(uniqueValidator);
exports.Question = mongoose.model("Question", questionSchema);