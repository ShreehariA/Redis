const Zet=(redis)=>{
    redis.zadd('rocket',1999,'applo',2000,'deep space',2008,'me')
    redis.zrank('rocket','deep space')
    redis.zrevrange('rocket',0,-1,(err,result)=>{
        console.log(result)
    })
    redis.zrangebyscore('rocket','-inf',2000,'withscores',(err,result)=>{
        console.log(result)
    })

}

export default Zet