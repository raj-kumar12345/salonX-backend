const mongoose = require("mongoose");
const serviceModel = require("../models/service.model");

const services = [  
  {
    title: "Haircut",
    description: "Clean and stylish haircut at your home",
    price: 99,
    duration: "30 min",
    category: "Hair",
    img: "https://i.pinimg.com/736x/1d/2c/93/1d2c93c573efacf8051153d307d875c2.jpg"
  },
  {
    title: "Beard Grooming",
    description: "Perfect beard trimming and shaping",
    price: 59,
    duration: "20 min",
    category: "Beard",
    img: "https://i.pinimg.com/736x/91/d6/03/91d6037c183ccc9644cdd59a70857524.jpg"
  },
  {
    title: "Haircut + Beard",
    description: "Complete haircut and beard styling combo",
    price: 129,
    duration: "45 min",
    category: "Combo",
    img: "https://i.pinimg.com/736x/6f/14/ca/6f14cab2a035813facf489697b62c8d0.jpg"
  },
  {
    title: "Hair + Beard + Massage",
    description: "Relaxing grooming with massage included",
    price: 249,
    duration: "60 min",
    category: "Premium",
    img: "https://i.pinimg.com/1200x/08/78/9a/08789a8face8c112b57fe6eb5874524c.jpg"
  },
  {
    title: "Full Combo Pack",
    description: "Haircut, beard, spa, and massage full package",
    price: 499,
    duration: "90 min",
    category: "Luxury",
    img: "https://i.pinimg.com/736x/89/90/e0/8990e0304c44794197af164ab0138011.jpg"
  },
  {
    title: "Hair Spa",
    description: "Deep nourishing hair spa treatment",
    price: 199,
    duration: "40 min",
    category: "Hair",
    img:"https://i.pinimg.com/1200x/e6/0a/84/e60a849daa134c5a56cb89dcce8eb96f.jpg"
  }
]


mongoose.connect("mongodb://127.0.0.1:27017/barber") // options removed
.then(async () => {
  console.log("MongoDB Connected");

  // Clear existing services
  await serviceModel.deleteMany({});
  console.log("Existing services cleared");

  // Insert new services
  await serviceModel.insertMany(services);
  console.log("Services added successfully");

  mongoose.connection.close();
})
.catch((err) => console.log(err));