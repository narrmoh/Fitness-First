const express = require("express");
const app = express();

app.get("/", function(request, response)
{
  response.send("<h1>Hello World</h1>");
});

app.get("/Contact", function(req, res)
{
  res.send("this is my email address");
});

app.get("/About", function(req, res)
{
  res.send("Name: Mohith I am a cs student");
});
app.get("/hobbies", function(req, res)
{
  res.send("code sleep eat fun");
});

app.listen(3000, function(){
  console.log("server started on port 3000");
});
