const express = require("express");
const cors  = require("cors")
const app = express();
const postRouter=require("./routes/user.routes")


const mongoose = require("mongoose");
app.use(express.json());
app.use(cors())
app.use(postRouter)
//try to connect to db
mongoose.connect(
  // "mongodb+srv://user123:Password123Tech@cluster0.jzb3zrv.mongodb.net/?retryWrites=true&w=majority"
  "mongodb://127.0.0.1:27017/mern"
);



app.listen(3001, () => {
  console.log("server runs perfectly");
});
