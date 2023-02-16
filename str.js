const Strings=(redis)=>{

redis.set('name','hari')
redis.set('address',300)
redis.get('name',(err,result)=>{
    console.log(result)

})
redis.incrby('address',100)
redis.get('address',(err,result)=>{
    console.log(result)

})

}
export default Strings