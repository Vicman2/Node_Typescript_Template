import {promisify}  from 'util'
import redis from 'redis'
import constants from '../src/config/constants';
const redisClient = redis

    .createClient(
        constants.REDIS_CONFIGURATION.REDIS_PORT,
        constants.REDIS_CONFIGURATION.REDIS_HOST, 
        {
            url: constants.REDIS_CONFIGURATION.REDIS_URL, 
            password:  constants.REDIS_CONFIGURATION.REDIS_PASSWORD, 
            retry_strategy: ()=> 1000
        }
    );

        // Redis not working on heroku 

function RedisInitializer(){
    redisClient.on("error", (err) => {
        console.log("Redis error", err)
    })
}

const getAsync = promisify(redisClient.get).bind(redisClient)

const setexAsync = promisify(redisClient.setex).bind(redisClient)

const redisAsync = {
    getAsync, 
    setexAsync
}



export{
    RedisInitializer,
    redisClient,
    redisAsync
} ;