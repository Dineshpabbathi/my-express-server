const express = require("express");

const app = express();

app.get("/", function(request,response){
    response.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: pabbathidinesh@gmail.com");
});

app.get("/about", function(req, res){
    res.send("About me:I'm Dinesh, Pursuing my btech in christuniversity and want to become software Developer.");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Games</li><li>Music</li><li>Movies</li></ul>");
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});