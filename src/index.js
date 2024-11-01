import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js";
/*dotenv.config({
    path: './env'
})*/
dotenv.config();
const port = process.env.PORT || 3000;
connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server is listening on http://localhost:${port}`)        
    })
    
})
.catch((err) => {
    console.log(`Could not conect to Mongo DB`, err);
    
})