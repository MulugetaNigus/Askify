const mongoose = require("mongoose");
require("dotenv").config();

// connecting with mongodb
const connectionDB = async () => {
   await mongoose.connect( process.env.MONGO_URI )
      .then( () => {
        console.log("DB Connected Succcessfully !");
      }) .catch( (err) => {
        console.log(err.message);
      })
}

module.exports = { connectionDB };
