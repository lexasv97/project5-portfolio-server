const { Schema, model } = require("mongoose");

const infoSchema = new Schema(
    {
        name: String,
        email: String,
        text: String
    },
    {
        timestamps: true,
    }
)

module.exports = model("Info", infoSchema);