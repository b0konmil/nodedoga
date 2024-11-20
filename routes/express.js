import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'

const app=express()
const PORT = 3000
const router = express.Router()


router.use("/express",(req, res, send) => {
    res.send("Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.")
});

export default router