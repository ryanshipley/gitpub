const express = require("express");
const app = express();
const drinks = require("./models/drinks.js");
const food = require("./models/food.js")

app.get("/", (req, res)=>{
    res.send("Welcome to the Gitpub app!");
});

app.get("/drinks", (req, res)=>{
    res.render("drinks_index.ejs", {
        drinks,
        food,
    });

});

app.get("/drinks/:id", (req, res)=>{
    res.render("drinks_show.ejs", {
        drink : drinks[req.params.id],
    });
})

app.get("/drinks/food/:id", (req, res)=>{
    res.render("food_show.ejs", {
        food : food[req.params.id],
    });
});

app.listen(3000, ()=>{
    console.log("listening");
})