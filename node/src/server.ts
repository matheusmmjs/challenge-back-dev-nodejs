import express from 'express';
import '@controllers/UsersController'

const app = express();

app.get('/', (request, response) => {
  return response.json({msg: "Mundo"})
})

app.listen(3000)
