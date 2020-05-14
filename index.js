const express = require("express");
const todoController = require("./controllers/todoController");

const app = express();

//set up template engine
app.set("view engine", "ejs");

//static file
app.use(express.static("./public"));

//fire controller
todoController(app);

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("App listing at port 3000");
  }
});
