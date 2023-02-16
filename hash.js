const Hashes=(redis)=>{
    redis.hmset('user:120','name','shree','no',89,'address','chennai')
    redis.hincrby('user:120','no',20)
    redis.hgetall('user:120',(err,result)=>{
        console.log(result)
    })
}
export default Hashes