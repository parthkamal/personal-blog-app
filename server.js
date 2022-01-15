// initialising the express server
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import adminRoute from './src/routes/adminRoute.js';
import userRoute from './src/routes/userRoute.js';
import { mongoooseConnection } from "./src/config/database.js";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

//using the ejs template engine for ssr
app.set("view engine", "ejs");

//app middlewares
app.use(express.urlencoded()); //to encrypt the url encoded data sent from the client
app.use(express.json());
app.use(cors());

//database connection
mongoooseConnection();


//routes
app.use('/admin',adminRoute);
app.use('/',userRoute);

//using views folder to access ejs files before rendering
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname+'/uploads'));


//setting port of the server
app.listen(process.env.PORT, () => {
  console.log("server listening at port 8080");
});
