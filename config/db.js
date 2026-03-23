const { default: mongoose } = require("mongoose");

const connectDB = async () =>{
    try {
        const res = await mongoose.connect(process.env.MONGO_URI)
        if(res){
            console.log('successfully connected to DATABASE');
        }
    } catch (error) {
        console.log('error while connecting to DATABASE');
    }
}

module.exports = connectDB