// require ('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(` Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    "MongoDB Connection Failed !!!", error;
  });

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
