# Redis
Redis practis
To start session in redis
docker run -p 6379:6379 -d redis                    //install redis image
docker exec -it local-redis /bin/bash               //run the image as continer
Type on prompt> redis-cli                           //start session client 
