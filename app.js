const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path")
const PORT = 3000;
const mongoose = require("mongoose");
const { Router } = require("express");

mongoose.connect("mongodb://localhost:27017/E-Shopper").then(()=>{
    console.log("DB connected successfully!!!")
}).catch(err=>{
    console.log(err);
})

const bodyParser = require("body-parser");
const viewPath = path.join(__dirname, "../Templetes/Views");
const PublicPath = path.join(__dirname, "../Public");
app.use(express.static(PublicPath));
app.set("view engine", "hbs");
app.set("views", viewPath);


app.get("/", (req,resp)=>{
    resp.render("index");
})

app.get("/index", (req,resp)=>{
    resp.render("index");
})

app.get("/shop", (req,resp)=>{
    resp.render("shop");
})

app.get("/shop", (req,resp)=>{
    resp.render("shop");
})

app.listen(PORT, (req, resp) => {
    
    console.log(`server running on port ${PORT}`);
 })

 