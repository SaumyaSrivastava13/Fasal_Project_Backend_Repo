require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const playlistRoutes = require("./routes/playlist");
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://saumya13:z1m5yURo0nOqQMUQ@odb.jqq0yxi.mongodb.net/?retryWrites=true&w=majority&appName=ODB')
.then(()=>{console.log("DB Connected")})
.catch((err)=>{console.log(err)});

// middlewares
app.use(cors({
    origin: true,
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", playlistRoutes);

let PORT=8000;
app.listen(8000, "0.0.0.0", ()=>{
    console.log(`server connected at port at ${PORT}`)
})


