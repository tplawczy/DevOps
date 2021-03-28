Odpalam kontenery: myredis, postges i tplawczyk/mybackend

docker run -v C:/Users/tplawczyk/postgresdata:/var/lib/postgresql/data --rm --name=postgres --network=mymulticont -e POSTGRES_PASSWORD=Smoku1!1 postgres:alpine

docker run --name=myredis --network=mymulticont --rm redis:alpine

docker run --rm --network=mymulticont tplawczyk/mybackend