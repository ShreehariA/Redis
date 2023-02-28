import Redis from 'ioredis'
import Strings from './str'
import Hashes from './hash'
import List from './list'
import Set from './set'
const redis= new Redis()
Set(redis)
List(redis)
Strings(redis)
Hashes(redis)


