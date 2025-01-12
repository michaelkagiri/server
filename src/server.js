import express from "express";
import cors from "cors";
import { connectDB } from "./database/config.js";
import { router } from "./routes/foruser.js";


const app = express();

// Middleware
app.use(express.json());

app.get("/", (req,res) => {
  res.json({
    message:"this is the home page of the chat gpt blog page"
  });


  
});


app.post("/blogs", (req,res) => {
  res.json({
    message:"posting"
  });
})



app.use(cors());

const PORT = process.env.PORT

// Connect to DB
connectDB();

// Routes
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
