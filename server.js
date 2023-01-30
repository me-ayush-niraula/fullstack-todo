// npm init
// npm i express dotenv
// npm i nodemon concurrently
// ------------------------------------------------------------------------------------
require("dotenv").config(); //access environment variable written in .env file and use them in our application
const express = require("express"); //initialize express server
const app = express();
// ------------------------------------------------------------------------------------

//adding middleware
app.use(express.json()); //allow us to pass json
app.use(express.urlencoded());
// ------------------------------------------------------------------------------------

//create api route
//every time we make 'get' request to "/", we get a return (to send data)
app.get("/", (req, res) => {
  res.send("todo mern ");
});
//to get something posted in json
//req check for name
//res le chai json format ma dinxa
app.post("/name", (req, res) => {
  if (req.body.name) {
    res.json({ hehename: req.body.name });
  } else {
    res.status(400).json({ error: "no name provided" }); //request cannot be fullfilled
  }
});
// ------------------------------------------------------------------------------------

//to make server run
app.listen(process.env.PORT, () => console.log(`server is running ${process.env.PORT}...`));
//postman allow us to make HTTP request to a server and bring back data

//git init
//git branch -m main [changing the name of branch form master to main]
//create .gitignore file
