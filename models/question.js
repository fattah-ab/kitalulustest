const mongoose = require("mongoose");
const { Schema } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");

const questionSchema = new Schema({
    question: {
        type: String,
        required: [true, `Please enter your question!`]
    },
    createdBy: {
        type: String,
        required: [true, `Must be filled, Please enter your name!`]
    },
    updatedBy: {
        type: String,
        default: null
    },
    isActive: {
        type: Boolean,
        default: true
    }   
}, { timestamps: true, versionKey: false });

// unique validator
questionSchema.plugin(uniqueValidator);
exports.Question = mongoose.model("Question", questionSchema);