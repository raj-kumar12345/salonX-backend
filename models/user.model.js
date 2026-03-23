const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        mobile: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            select: false,
            required: true
        },
        role: {
            type: String,
            enum: ["user","admin"],
            default: "user"
        },
        isVerified: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)



userSchema.pre("save",async function(next) {

    // hash only if password exists
    if(this.isModified("password") && this.password){
        this.password = await bcrypt.hash(this.password, 10)
    }


  next
})



const userModel = mongoose.model("users",userSchema)

module.exports = userModel