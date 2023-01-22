const express = require("express");
const app = express();
const path = require("path");
const port = 3002;
const hbs = require("hbs");
const collection = require("./mongodb")
const templatePath=path.join(__dirname, '../login')

app.use(express.json());
app.set("view engine", "hbs")
app.set("views", templatePath)
app.use(express.urlencoded({extended:false}))

app.get("/", (req, res) => {
    res.render("login");
})

app.get("/signup", (req,res) => {
    res.render("signup");
})

app.post("/signup",async (req,res) => {

const data = {
    name : req.body.name,
    password : req.body.password
    
}

await collection.insertMany([data])

//redirected to the home page
response.render("home")

})

app.post("/login",async (req,res) => {


})


app.listen(port, () => {
    console.log('port connected to 3002');
})


array[0].name = newName 