import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const DATABASE_CONNECTION_URL =`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.o0r8w.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;

export const mongoooseConnection = () => {
  mongoose.connect(DATABASE_CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(() => {
    console.log("successfully connected to the database");
  }).catch((err)=>{
    console.log("database connection failed .exiting now...");
    console.error(err);
    process.exit(1);
  });
};

