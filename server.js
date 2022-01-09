// initialising the express server
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import adminRoute from './src/routes/adminRoute.js';
import userRoute from './src/routes/userRoute.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

//using the ejs template engine for ssr
app.set("view engine", "ejs");

//app middlewares
app.use(express.urlencoded({ extended: true }));
app.use('/admin',adminRoute);
app.use('/',userRoute);

//using views folder to access ejs files before rendering
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));


//setting port of the server
app.listen(8080, () => {
  console.log("server listening at port 8080");
});
