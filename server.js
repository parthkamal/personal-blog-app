// initialising the express server
import express from "express";
import fetch from "node-fetch";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

//using the ejs template engine for ssr
app.set("view engine", "ejs");

//app middlewares

//using views folder to access ejs files before rendering
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

//apis
app.get("/", (req, res) => {
  res.render("pages/home");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/resume", (req, res) => {
  res.render("pages/resume");
});

app.get("/projects", (req, res) => {
  res.render("pages/projects");
});

app.get("/posts", async (req, res) => {
  try {
      await fetch('http://localhost:5000/posts')
      .then(res=>res.json())
      .then(data=>{
          console.log(data.posts);//
          res.render('pages/posts',{posts:data.posts});
      })

  } catch (err) {
    console.log(err);
  }
});

//setting port of the server
app.listen(8080, () => {
  console.log("server listening at port 8080");
});
