const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const items = ["Database", "SQL", "MongoDB"];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));


app.get("/", function(req, res){

  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  var day = today.toLocaleDateString("en-Us", options);

  res.render("list", {
    kindOfDay: day, newListItems: items
  });

});

app.post("/", function(req, res){
  var item = req.body.newItem;
  items.push(item);

  res.redirect("/");

})



app.listen(3000, function(req, res){
  console.log("server is started at port 3000");
});
