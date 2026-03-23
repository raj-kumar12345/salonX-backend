require("dotenv").config()
const cors = require("cors")
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.route")
const appointmentRoutes = require("./routes/appointment.route")
const barberAuthRoutes = require("./routes/barber.auth.route")
const serviceRoute = require("./routes/service.route")
const cookieParser = require("cookie-parser")


const app = express();

connectDB();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


// routes
app.use("/api/auth",authRoutes)

// appointment
app.use("/api/appointment",appointmentRoutes)

// service route
app.use("/api/service", serviceRoute)

// barber routes
app.use("/api/barber",barberAuthRoutes)



const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})