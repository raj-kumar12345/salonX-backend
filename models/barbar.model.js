const mongoose = require("mongoose");

const barberSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
            unique: true
        },
        shopName: {
            type: String,
            required: true,
        },
        experience: {
            type: Number,
            required: true,
        },
        location: {
            pincode: {
                type: Number,
                required: true,
            },
            city: {
                type: String,
                required : true
            },
            address: {
                type: String,
                required: true
            }
        },
        isApproved: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true
    }
)


const barberModel = mongoose.model("barbers",barberSchema)

module.exports = barberModel