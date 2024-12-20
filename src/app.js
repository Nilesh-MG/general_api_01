import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app =express();

let corsOptions = {
    origin: process.env.CORS_ORIGIN,
    
  }

app.use(cors(corsOptions));
app.use(express.json({"limit":"16kdb"}));
app.use(express.urlencoded({extended: true,
    limit: "16kb"
}))

app.use(express.static("public"))
app.use(cookieParser())
export {app}