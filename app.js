const express = require("express");

const app = express();
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const mongoose = require("mongoose");


// parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cors
app.use(cors());

// db config
const mongoURI = process.env.MONGO_URI;
mongoose.Promise = global.Promise;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
};
mongoose.connect(mongoURI, options);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error"));
db.once("open", () => console.log("Connected to mongodb!"));

// routes
const router = require('./routes');
// const errorHandler = require("./middlewares/errorHandler");


app.use(router);
// app.use(errorHandler);

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening to ${PORT}`));

// server.listen(PORT);
// server.on("listening", () => {
//     console.log(`Listening on localhost Port ${PORT}.`)
// })
