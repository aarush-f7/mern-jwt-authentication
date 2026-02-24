const express = require("express");
const authRoutes = require("./routes/auth.routes")
const cookieParser = require("cookie-parser")
const postRoutes = require("./routes/post.route")


const app = express();
app.use(express.json());  // middleware use to send data in (req.body) by converting it into json.
app.use(cookieParser());



app.use("/api/auth", authRoutes);  //prefix 
app.use("/api/posts", postRoutes); //prefix used for posts.route


module.exports = app;

