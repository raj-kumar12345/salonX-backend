const { default: mongoose } = require("mongoose");

const appointmentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        service: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "services",
        },
        location: {
            city: {
                type: String,
                default: ""
            },
            houseNo: {
                type: String,
                default: ""
            },
            pincode: {
                type: String,
                default: ""
            }
        },
        date: {
            type: Date,
            required: true,
        },
        time: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }
    },
    {
        timestamps: true,
    }
)


const appointmentModel = mongoose.model("appointments",appointmentSchema)

module.exports = appointmentModel