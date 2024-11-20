import express, { Router } from 'express'
import expressRouter from './routes/express.js'
import greetingRouter from './routes/greeting.js'
import nodejsRouter from './routes/nodejs.js'
import bodyParser from 'body-parser'

const app=express()
const PORT = 3000
const router = express.Router()

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(expressRouter)
app.use(greetingRouter)
app.use(nodejsRouter)
app.use(bodyParser.urlencoded({extended: false}))

app.use("/",(req, res) => {
    res.send("Hi there!")
});


app.listen(PORT, () => console.log(`Hi there!`))
