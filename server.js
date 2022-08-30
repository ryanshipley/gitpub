const express = require("express");
const app = express();
const drinks = require("./models/drinks.js");

app.get("/", (req, res)=>{
    res.send("Welcome to the Gitpub app!");
});

app.get("/drinks", (req, res)=>{
    res.send(drinks);
});

app.listen(3000, ()=>{
    console.log("listening");
})