import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'

const app=express()
const PORT = 3000
const router = express.Router()

router.use("/node",(req, res, send) => {
    res.send("A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.")
});

export default router