const express = require("express");
const mongoose = require("mongoose");

// start server 
const app = express();

// set up port
const PORT = process.env.PORT || 3000;

// make sure we can use JSON 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// for public folder static
app.use(express.static("public"));

// code added for mongo atlas deployment 
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/Workout-Tracker",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// routes
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT} 🚀 `)
});
