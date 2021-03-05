import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({msg: "Mundo"})
})

app.listen(3000)
