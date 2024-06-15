import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();

//app.use() is mostly used for anytype of middleware or configuration settings.
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:'20kb'}))
app.use(express.urlencoded({extended: true, limit: '20kb'}))
app.use(express.static("public"))
app.use(cookieParser())


export default app;