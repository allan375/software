import express from 'express'
import mongoose from 'mongoose'
import User from './src/models/User'

mongoose.connect('mongodb+srv://allan:123@starwars-api.gknciin.mongodb.net/?retryWrites=true&w=majority&appName=starwars-api')
  .then(() => console.log('Connected to MongoDB'))
  .catch(error =>  console.error('Error connecting to MongoDB:', error))

const app = express()
const port = process.env.PORT  || 3000

app.get('/', (req, res) => {
  res.send('Olá mundo!')
})

app.get('/processar-login', (req, res) => {
  const { email, password } = req.query
})

app.get('/processar-cadastro', (req, res) => {
  const user1 = new User({
    name: 'Allan',
    email: 'allan@gmail.com',
    password: '123'
  })
  
  user1.save()
    .then(console.log(user1, 'Usuário cadastrado'))
    .catch(error => console.log(error))
})

app.listen(port, () =>{
  console.log(`Servidor rodando: http://localhost:${port}`)
})