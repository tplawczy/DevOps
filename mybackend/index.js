const express = require('express');
const cors = require('cors')
const bodyParser = require("body-parser");

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
redisClient.on('connect', () => {
  console.log("Connected to Redis server");
});

const { Pool } = require('pg');

const pgClient = new Pool({
  user: "postgres",
  password: "Smoku1!1",
  database: "postgres",
  host: "postgres",
  port: "5432"
});
pgClient.on('error', () => {
  console.log("Postgres not connected");

});

pgClient
  .query(`CREATE TABLE IF NOT EXISTS rowery (
    id serial PRIMARY KEY,
    marka VARCHAR(255),
    model VARCHAR(255),
    cena NUMERIC(5,2),
    typ VARCHAR(255),
    ilosc NUMERIC
    );`
  )


  .catch((err) => {
    console.log(err);
  });


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
})

const getRower = (request, response) => {
  try {
    console.log(request.body)
    pgClient.query('SELECT * FROM rowery', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      console.log('Wywolano funkcje getRower')
    })
  } catch (error) {
    console.log(error)
  }
};

const createRower = (request, response) => {
  try {
    console.log(request.body)
    const { marka, model, cena, typ, ilosc } = request.body
    pgClient.query('INSERT INTO rowery (marka, model, cena,typ,ilosc) VALUES ($1, $2, $3, $4, $5)', [marka, model, cena, typ, ilosc], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Rower became added`)
      console.log('Wywolano funkcje createRower')

    })
  } catch (error) {
    console.log(error)
  }
};
const updateRower = (request, response) => {
  try {
    const id = parseInt(request.params.id);
    console.log(request.body)
    const { marka, model, cena, typ, ilosc } = request.body


    pgClient.query(`UPDATE rowery SET marka=$1, model=$2, cena=$3, typ=$4, ilosc=$5 WHERE id=${id}`, [marka, model, cena, typ, ilosc], (error, results) => {
      if (error) {
        throw error
      }
      response.status(204).send(`Rower became updated`)
      console.log('Wywolano funkcje updateRower')

    })
  } catch (error) {
    console.log(error)
  }
};
const deleteRower = (request, response) => {
  try {
    const rid = parseInt(request.params.rid);
    console.log(request.body)

    pgClient.query(`DELETE FROM rowery WHERE id=${rid}`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(204).send(`Rower deleted with id: ${rid}`)
      console.log('Wywolano funkcje deleteRower')
    })
  } catch (error) {
    console.log(error)
  }
};

const getRowerByMarka = (req, res) => {
  try {
    const marka = req.params.marka;


    redisClient.get(marka, async (err, rowery) => {
      if (rowery) {
        return res.status(200).send({
          error: false,
          message: `Loading Rower from the Redis cache ...............`, 
          data: JSON.parse(rowery)
          
        })
      
      } else {
        console.log(`Rower is not in Redis `)
        pgClient.query(`SELECT * FROM rowery WHERE marka = $1`, [marka], (error, results) => {
          if (error) {
            throw error
          }
          redisClient.setex(marka, 1440, JSON.stringify(results.rows));
          res.status(200).json(results.rows)
          console.log('Loading from the Postgres and adding to Redis cache............')
        })

      }
    })
  } catch (error) {
    console.log(error)
  }
};


app.get('/', (req, res) => res.send('hello world'))
app.get('/rowery/', getRower)
app.post('/rowery/', createRower)
app.put('/rowery/:id/', updateRower)
app.delete('/rowery/:rid/', deleteRower)
app.get('/rowery/bymarka/:marka', getRowerByMarka)
