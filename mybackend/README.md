Odpalam kontenery: myredis, mypostges i tplawczyk/mybackend

docker run -v C:/Users/tplawczyk/postgresdata:/var/lib/postgresql/data --rm --name=mypostgres --network=mymulticont -e POSTGRES_PASSWORD=Smoku1!1 postgres:alpine

docker run --name=myredis --network=mymulticont --rm redis:alpine

docker run -p 5000:5000 --rm --network=mymulticont tplawczyk/mybackend

Dodanie roweru z konsoli Postgress
INSERT INTO rowery(marka,model, cena, typ, ilosc) VALUES('Merida','BigNine500',' 200', 'MTB', '23');

Test Dodawania roweru do bazy przez API
curl  --data "marka=Kross&model=Hexagon&cena=400&typ=MTB&ilosc=7" http://localhost:5000/rowery/

curl  --data "marka=Scott&model=Addict&cena=200&typ=Road&ilosc=3" http://localhost:5000/rowery/

zaciągam curl:
apk --no-cache add curl

Test Edytowania roweru przez API:
curl -X PUT -d "marka=Giant&model=Roam&cena=250&typ=MTB&ilosc=4" http://localhost:5000/rowery/2
Test Kasowania roweru przez API:
curl -X DELETE http://localhost:5000/rowery/2

Testowanie odpytywania z Redis cache (Pokaż rowery których cena jest równa 400)

curl http://localhost:5000/rowery/400
