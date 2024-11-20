import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'

import expressRoutes from './routes/express.js'
import greetingRoutes from './routes/greeting.js'
import nodejsRoutes from './routes/nodejs.js'

const app=express()
const PORT = 3000

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('/routes', expressRoutes)
app.use('/routes', greetingRoutes)
app.use('/routes', nodejsRoutes)

app.use((req, res) => {
    res.render('/',{
        path : 'index.html'
    })
});

app.listen(PORT, () => console.log(`Hi there!`))
