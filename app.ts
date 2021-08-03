import * as http from 'http'
import * as  path from 'path'
import dotenv from 'dotenv'
import express from 'express'
const app = express()
const server = http.createServer(app)
require('express-async-errors')

dotenv.config()


require('./src/middlewares/middlewares')(app)
import  constants from  './src/config/constants'
import database from './src/startup/database'
import {ErrorMiddleware } from './src/middlewares/errorHandler'
import apiRoutes from './src/routes/rootRoute'


//endPoint
app.use('/api', apiRoutes())

//Initial home route
app.use('/', (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, './public', 'index.html'))
})

// Error Middleware
app.use(ErrorMiddleware)
const port  = constants.PORT || 2021
server.listen(port, () => {
    database()
    console.log(`Listening on port ${port}`)
})

server.on('error', error => {
    console.log(`Error occured on the server ${error}`)
})