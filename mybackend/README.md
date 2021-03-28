Odpalam kontenery: myredis, postges i tplawczyk/mybackend

docker run -v C:/Users/tplawczyk/postgresdata:/var/lib/postgresql/data --rm --name=postgres --network=mymulticont -e POSTGRES_PASSWORD=Smoku1!1 postgres:alpine

docker run --name=myredis --network=mymulticont --rm redis:alpine

docker run --rm --network=mymulticont tplawczyk/mybackend


Dodawanie roweru do bazy:
curl  --data "marka=Kross&model=Hexagon&cena=400&typ=MTB&ilosc=7" http://localhost:5000/rowery/

zaciągam curl:

apk --no-cache add curl
 
Testowanie odpytywania z Redis cache (Pokaż rowery których cena jest równa 400)

curl http://localhost:5000/rowery/400
