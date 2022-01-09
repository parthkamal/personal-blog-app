// initialising the express server
import express from "express";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
import { dirname } from "path";
import adminRoute from './src/routes/adminRoute.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

//using the ejs template engine for ssr
app.set("view engine", "ejs");

//app middlewares
app.use(express.urlencoded({ extended: true }));
app.use('/admin',adminRoute);

//using views folder to access ejs files before rendering
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));
const post = {
  _id: "ffosdghsdb34196592",
  image: "image url",
  date: "date string",
  author: "parth kamal",
  title: "this is a post title",
  summary:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be",
  description: [
    "this is point 1",
    "this is point 2",
    "this is point 2",
    "this is point 2",
    "this is point 3",
  ],
};
const article = {
  title: "hello i am parth kamal this is my blog website",
  description:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.<ul><li>this is a point",
};

const hyperlinks = [
  {
    title: "github",
    link: "https://github.com/parthkamal",
  },
  {
    title: "github",
    link: "https://github.com/parthkamal",
  },
  {
    title: "github",
    link: "https://github.com/parthkamal",
  },
  {
    title: "github",
    link: "https://github.com/parthkamal",
  },
];

//apis
app.get("/", (req, res) => {
  res.render("pages/home", { article: article });
});

app.get("/about", (req, res) => {
  res.render("pages/about", { article: article });
});

app.get("/resume", (req, res) => {
  res.render("pages/resume");
});

app.get("/projects", (req, res) => {
  res.render("pages/projects");
});

app.get("/posts", async (req, res) => {
  res.render("pages/posts", { post: post });
});

app.get("/contact", (req, res) => {
  res.render("pages/contact", { hyperlinks: hyperlinks });
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.redirect("/contact");
});



//setting port of the server
app.listen(8080, () => {
  console.log("server listening at port 8080");
});
