// import express from "express"
// import cors from "cors"
// import "dotenv/config"
// import connectDB from "./config/db.js"
// import { loginUser } from "./controllers/auth.controller.js"
// const app = express()
// const port = 3000

// await connectDB()


// app.use(express.json())
// app.use(cors())
// app.get("/",(req,res)=>{
// res.send("server is live")
// })

// app.use("/api/auth",loginUser)

// app.listen(port,()=>{
//   console.log("Server is runnning")
// })



import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
;
import authRoutes from "./routes/auth.Routes.js"

const app = express();
const port = 3000;

await connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is live");
});

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});