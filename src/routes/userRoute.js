import express from "express";
const router = express.Router();

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
router.get("/", (req, res) => {
    res.render("pages/home", { article: article });
  });
  
  router.get("/about", (req, res) => {
    res.render("pages/about", { article: article });
  });
  
  router.get("/resume", (req, res) => {
    res.render("pages/resume");
  });
  
  router.get("/projects", (req, res) => {
    res.render("pages/projects");
  });
  
  router.get("/posts", async (req, res) => {
    res.render("pages/posts", { post: post });
  });
  
  router.get("/contact", (req, res) => {
    res.render("pages/contact", { hyperlinks: hyperlinks });
  });
  
  router.post("/contact", (req, res) => {
    console.log(req.body);
    res.redirect("/contact");
  });


  export default router;