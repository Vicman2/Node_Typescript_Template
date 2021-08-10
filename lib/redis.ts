import {promisify}  from 'util'
import redis from 'redis'
const redisClient = redis.createClient();

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