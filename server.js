// require ('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./src/db/index.js";
dotenv.config({
  path: './.env'
})


connectDB()







/*
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR:", error);
    });
    app.listen(`App is listening on port ${process.env.PORT}`)
  } catch (error) {
    console.log("ERROR:", error);
    throw error;
  }
})();
*/
