const redis =require("redis");
const client = redis.createClient();
client.on("error",function(error){
    console.log('have error');
})
client.on("connect",function(error){
    console.log('connecting');
})

module.exports={

};