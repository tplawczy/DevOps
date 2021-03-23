const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const redis = require('redis');

const redisClient = redis.createClient({
        host: "myredis",
        port: 6379,
        //retry_strategy: () => 1000
});
app.get("/",(req, res) => {
    res.send("Hello Word!");
    
});
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`API listening on port ${PORT}`);
});