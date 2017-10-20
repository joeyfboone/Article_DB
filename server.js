const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const mongojs = require("mongojs");
// Require request and cheerio. This makes the scraping possible
const request = require("request");
const cheerio = require("cheerio");
const hb = require('handlebars');
var mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/article_db", {
  useMongoClient: true
});

//var dbpassword = require("./keys.js");
const app = express();

const PORT = process.env.PORT || 3000;


app.use(methodOverride('X-HTTP-Method-Override'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({type:"applicaiton./vnd.api+json"}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./app/routing/apiroutes.js")(app);

app.listen(PORT, function(){
    console.log("App listening on " + PORT);
})
