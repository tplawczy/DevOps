const express = require('express');
const cors = require('cors')

const app = express();
const router = express.Router();


app.use(cors());
app.use(express.json());

module.exports = router

const redis = require('redis');

const redisClient = redis.createClient({
        host: "myredis",
        port: 6379
        //retry_strategy: () => 1000
});
redisClient.on('connect',()=> {
    console.log("Connected to Redis server");
});

const{ Pool } = require('pg');

const pgClient = new Pool({
    user: "postgres",
    password: "Smoku1!1",
    database:"postgres",
    host: "postgres",
    port:"5432"
});
pgClient.on('error', ()=>{
    console.log("Postgres not connected");

});

pgClient
.query(`CREATE TABLE IF NOT EXISTS rowery (
    produktid INTEGER,
    marka VARCHAR(255),
    model VARCHAR(255),
    cena NUMERIC(5,2),
    typ VARCHAR(255),
    ilosc INTEGER
    );`
  )


.catch((err)=>{
    console.log(err);
});
app.get("/",(req, res) => {
    res.send("Hello Word!");
})


  
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`API listening on port ${PORT}`);
})



const getRowerByCena = (request, response) => {
    const cena = parseInt(request.params.cena)
  
    pgClient.query('SELECT * FROM rowery WHERE cena = $1', [cena], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      console.log('Wywolano funkcje  getrRowerByCena')
    })
  }



 
  const getRower = (request, response) => {
    
  
    pgClient.query('SELECT * FROM rowery', (error, results) => {
      if (error) {
        throw error
      }
      response.status(202).json(results.rows)
      console.log('Wywolano funkcje  getrower')
    })
  }
  
  app.get('/rowery/:cena', getRowerByCena)
  app.get('/rowery/', getRower)