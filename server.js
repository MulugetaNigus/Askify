const express = require("express");
const cors = require("cors");
const { connectionDB } = require("./utils/db");
const { route } = require("./Routes/UserRoutes");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

// main routes
app.use("/api/v2/portal" , route );

// app connections
const PORT = process.env.PORT || 6666;
app.listen( PORT , () => {
    try {
        connectionDB();
        console.log(`app running on port ${ PORT }`);   
    } catch (error) {
        console.log(error.message);
    }
});