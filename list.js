const List=(redis)=>{
    redis.rpush('dep','connect','cpe','cyber','ai','sky')
    redis.rpush('dep','data')
    redis.lpop('dep')
    redis.lrange('dep',0,-1,(err,result)=>{
        console.log(result)
        
    })

}

export default List