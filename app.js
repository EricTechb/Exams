var express = require("express");
var path = require("path");

var routes = require("./routes");

var app = express();

app.set("port", process.env.PORT || 5000);

app.set("views", path.join(__dirname, "views"));
//app.set('views', path.join(__dirname, 'views/AS'));
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.use(routes);

app.listen(app.get("port"),function(){
    console.log("Server started on port " + app.get("port"));
});