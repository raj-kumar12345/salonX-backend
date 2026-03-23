const { default: mongoose } = require("mongoose");

const serviceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        duration: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
)


const serviceModel = mongoose.model("services",serviceSchema);

module.exports = serviceModel