//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//use bodyParser

app.use(bodyParser.urlencoded({extended: true}));

//get the html

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

// app.listen(3000, function(){
//     console.log("server is running on port 3000.");
// });

//BMI-Calculator

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/bmicalculator", function(req, res) {

    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    
    let result = weight/(Math.pow((height/100), 2));
    let bmiNum = result.toFixed(2);
    let bmiResult; 
    if(bmiNum <=18.5) {
        bmiResult = "Underweight";
    } else if(bmiNum > 18.5 && bmiNum <= 25) {
        bmiResult = "Normal";
    } else if(bmiNum > 25) {
        bmiResult = "Overweight";
    } else {
        bmiResult = "error";
    }

    res.send("Your Body Mass Index is " + bmiNum + "\n" + "Your body status is " + bmiResult);
});

//server port log check

app.listen(3000, function(){
    console.log("server is running on port 3000.");
});
 