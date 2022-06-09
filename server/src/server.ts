import cors from "cors";
import express from "express";
import { route } from "./routes";
const app = express();
app.use(cors())
app.use(express.json())
app.use(route)

// comentário
app.listen(process.env.PORT|| 3333, () => console.log("server running"));
