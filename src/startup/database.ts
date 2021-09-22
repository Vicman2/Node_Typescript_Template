import {connect} from "mongoose"
import constants from '../config/constants'


function databse(){
    connect(constants.DATABASE_URI!, { 
        useCreateIndex: true,
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("::: Connected to mongoDb")
    })
    .catch((err: Error) => {
        console.log("There was an error while connecting to the database.")
    })
}

export default databse