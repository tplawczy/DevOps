docker run hellow-word
docke run redis
docker ps --all
docker system prune
docker images
docker start -a numer
docker exex -it numer
docker exec  -it numer sh
exit powrot
docker start nazwa


https://hub.docker.com/
doker
tplawczyk
Smoku1!11



docker run busybox sleep 2000
docker build
docker image ls



#1. Wybieramy obraz bazowy
FROM node:alpine

#2. Instalujemy w nm zaleznosci potrzebne do uruchomienia "procesu glownego"
RUN apk add --update redis

# 3. ustyawienie procesu głównego\
CMD redis-server



docker tag sha256:52cf39c0f6a75c230b1ea1b4e11a0d23ffc55c1ff42b8cde3ac7347f13d4aaab tplawczyk/myapp
docker push tplawczyk/myapp:latest



docker run --name=myredis --network=mymulticont --rm redis:alpine
docker build . -t tplawczyk/mybackend
docker run -p 5000:5000 --rm --network=mymulticont tplawczyk/mybackend

--rm kasuje kontener po jego zatrzymaniu 

docker run -v C:/Users/tplawczyk/postgresdata:/var/lib/postgresql/data --rm --name=mypostgres --network=mymulticont -e POSTGRES_PASSWORD=Smoku1!1 postgres:alpine
