const mongoose = require('mongoose');

mongoose
  .connect(`mongodb://mongodb:27017?connectTimeoutMS=${process.env.CONNECTION_TIMEOUT_MS || 30000}`)
  .then(() => {
    console.log('conectou')
  }, error => console.log(error));

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