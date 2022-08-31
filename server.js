//Baic server elements
const express = require("express");
const app = express();
const drinks = require("./models/drinks.js");
const food = require("./models/food.js")

/*Get "/" gets the home route.
@param req the request.
@param res the response.
@send send the response.
*/
app.get("/", (req, res)=>{
    res.send("Welcome to the Gitpub app!");
});

/*Get "/drinks" gets the drink route.
@param req the request.
@param res the response.
@render render the drinks_index.ejs file.
@param drinks the drinks array.
@param food the food array.
*/
app.get("/drinks", (req, res)=>{
    res.render("drinks_index.ejs", {
        drinks,
        food,
    });

});

/*Get "/drinks/:id" gets the path of a drink.
@param req the request.
@param res the response.
@render render the drinks_show.ejs file.
@param index of the drink.
*/
app.get("/drinks/:id", (req, res)=>{
    res.render("drinks_show.ejs", {
        drink : drinks[req.params.id],
    });
})

/*Get the "/drinks/food/:id" gets the path of a food item.
@param req the request
@param res the response.
@render render the food_show.ejs file. 
@param id the index of the food item in the foods array.
*/
app.get("/drinks/food/:id", (req, res)=>{
    res.render("food_show.ejs", {
        food : food[req.params.id],
    });
});

//app.listen tells us to listen to the port (3000).
app.listen(3000, ()=>{
    console.log("listening");
})