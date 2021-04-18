const express = require("express");
const app=express();
const path=require("path");

const staticPath=path.join(__dirname, "../public");
//app.set("view engine", "hbs");
app.use(express.static(staticPath));

app.get("/cart.html",(req,res)=>{
    res.render('cart');
});

app.listen(8000, ()=>{
    console.log("listing the port at 8000");
});