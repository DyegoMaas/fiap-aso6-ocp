const mongoose = require('mongoose');

const MONGO_SERVER = process.env.MONGO_SERVER;
console.log('MONGO_SERVER', MONGO_SERVER, 'process.env', process.env);
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_DATABASE = process.env.MONGO_DATABASE;

(async () => await mongoose
  .connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_SERVER}:27017/${MONGO_DATABASE}?connectTimeoutMS=30000`)
  .then(
    () => {
      console.log('conectou')
    }, 
    error => console.log(error)
))();

const Book = mongoose.model('Books', { 
  name: String,
  releaseDate: Date
});

const express = require('express'), bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json());

const port = 3000

app.get('/', (req, res) => {
  const secret = process.env.LIBRARY_SECRET
  res.send(`A Book API: secret=${secret}`)
})

app.get('/books', async (req, res) => {
  const books = await Book.find({})
  const response = books.map(x => {
    return { name: x.name, releaseDate: x.releaseDate }
  })
  res.send(response)
})

app.post('/books', (req, res) => {
  const book = new Book(req.body)
  book.save().then(() => res.send('book saved'))
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})