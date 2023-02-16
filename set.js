const Set=(redis)=>{
    redis.sadd('tag','react','node','js','html','css')
    redis.sismember('tag','css')
    redis.sadd('tag:react','app','modules')
    redis.sunionstore('tag:"react native"','tag:react')
    redis.spop('tag')
    redis.scard('tag:react')
    redis.smembers('tag:"react native"',(err,result)=>{
        console.log(result)
    })
    redis.smembers('tag',(err,result)=>{
        console.log(result)
    })
    
}

export default Set