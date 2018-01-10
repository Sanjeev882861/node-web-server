const express = require("express");
const hbs = require("hbs");
var app = express();
hbs.registerPartials(__dirname+"/views/partials");
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));
hbs.registerHelper("getCurrentYear",()=> new Date().getFullYear());
const port = process.env.PORT || 3000;
app.use((req,res,next) =>{
    var now = new Date();
    console.log(`${now} :: ${req.url} :: ${req.method}`)
    next();
});

app.use((req,res,next) =>{
    res.render("maintenance.hbs");
});


app.get("/", (req,res) => {
    //res.send("Hello Server");
    res.render("home.hbs",{
        pageTitle:"Home Page",
        
        welcome:"Welcome to my website"
    })
});

app.get("/about", (req,res) => {
    //res.send("About Page");
    res.render("about.hbs",{
        pageTitle:'About Page',
        
    });
});

app.get("/bad", (req,res) => {
    res.send({
        errorMessage: "Unable to fulfill the request"
    });
});


app.listen(port ,()=>{
    console.log("server is up and running")
});