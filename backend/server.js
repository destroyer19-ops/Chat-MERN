import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectToMongoDB from './db/connectToMongoDb.js';
import cookieParser from 'cookie-parser';

const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000
app.use(express.json());
app.use(cookieParser())

app.get('/', (req, res)=>{
    res.send("Hello world")
})

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.listen(PORT, ()=> {
    connectToMongoDB();
    console.log(`Server running on PORT ${PORT}`)
})