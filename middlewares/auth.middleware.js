const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const authMiddleware = async (req,res,next) =>{
    try {
        
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                message: "unAuthorized user"
            })
        }

        const decode = jwt.verify(token,process.env.JWT_SECRET_KEY)
        if(!decode){
            return res.status(401).json({
                message: "unAuthorized"
            }) 
        }

        const user = await userModel.findById(decode.id);
        if(!user){
            return res.status(404).json({
                message: "user not found"
            })
        }

        req.user = user;
        next()


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}


module.exports ={ authMiddleware }