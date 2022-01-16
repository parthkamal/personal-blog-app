import express from "express";
import fetch from "node-fetch";
const router = express.Router();

const fetchObject = async (url) => {
  try {
    const object = await fetch(url)
      .then((res) => res.json())
      .then((json) => json);
    return object;
  } catch (error) {
    console.log(error);
  }
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
  res.render("pages/home");
});

router.get("/about", async (req, res) => {
  const abouts = await fetchObject("http://localhost:8080/admin/about");
  res.render("pages/about", { abouts: abouts });
});

router.get("/resume", async (req, res) => {
  const resumes = await fetchObject("http://localhost:8080/admin/resume");
  console.log(resumes);
  res.render("pages/resume",{resumes:resumes});
});
router.get("/projects", async(req, res) => {
  const projects = await fetchObject("http://localhost:8080/admin/projects");
  res.render("pages/projects", { projects: projects });
});

router.get("/posts", async (req, res) => {
  const posts =await fetchObject('http://localhost:8080/admin/posts')
  console.log(posts);
  res.render("pages/post", { posts: posts });
});

router.get("/contact", (req, res) => {
  res.render("pages/contact", { hyperlinks: hyperlinks });
});

router.post("/contact", (req, res) => {
  console.log(req.body);
  res.redirect("/contact");
});

export default router;
