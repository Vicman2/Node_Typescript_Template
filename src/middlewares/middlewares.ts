
const cors = require('cors')
const helmet = require('helmet')
import  express from  'express'


module.exports = function(app:  express.Application){
    app.use(cors())
    app.use(helmet())
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
}