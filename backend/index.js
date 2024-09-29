//npm init
//npm i axios cors express json-server 
//npm i nodemon concurrently -D
const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const {handleErrors} = require('./middleware/errorMiddleware');
const app = express();

app.use(cors());
app.use(express.json()); 

app.use('/api', router);
//use error middleware at the end
app.use(handleErrors);

const PORT = 80;
app.listen(PORT, ()=>{
    console.log('Server is running on http://localhost');
});