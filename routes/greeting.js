import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'

const app=express()
const PORT = 3000
const router = express.Router()
const username = "Kónya Milán"

router.use("/greeting",(req, res, send) => {
    res.send(`Hello, ${username}`)
});

export default router