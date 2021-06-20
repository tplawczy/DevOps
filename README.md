Polecenia Docker

docker run hellow-word
docke run redis
docker ps --all
docker system prune     czyszczenie systemu
docker images           wyświetlenie obrazów
docker start -a numer   
docker exex -it numer
docker exec  -it numer sh
exit powrot
docker start nazwa         


https://hub.docker.com/
doker
tplawczyk
password



docker run busybox sleep 2000
docker build
docker image ls


Przygotowanie image-u
#1. Wybieramy obraz bazowy
FROM node:alpine

#2. Instalujemy w nm zaleznosci potrzebne do uruchomienia "procesu glownego"
RUN apk add --update redis

#3. ustawienie procesu głównego\
CMD redis-server


Tagowanie i wysyłanie do dockerhub 
docker tag tplawczyk/myapp
docker push tplawczyk/myapp:latest



docker run --name=myredis --network=mymulticont --rm redis:alpine
docker build . -t tplawczyk/mybackend
docker run -p 5000:5000 --rm --network=mymulticont tplawczyk/mybackend

--rm kasuje kontener po jego zatrzymaniu 

docker run -v C:/Users/tplawczyk/postgresdata:/var/lib/postgresql/data --rm --name=mypostgres --network=mymulticont -e POSTGRES_PASSWORD=Smoku1!1 postgres:alpine


    Projekt z dockera

Projektem jest wielokontenerowa aplikacja której uruchomieniem steruje Ddocker-compose.yaml. Polecenie docker-compose up powoduje automatyczne budowanie obrazów myfrontend/mybackend/myredis oraz uruchomienie redis:alpine i postgres:alpine z odpowiednimi ustawieniami potrzebnymi do zamontowania storage i dostępów do bazy postgres.    