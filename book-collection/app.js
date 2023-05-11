const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html'); 
});
const books = [];
app.get('/books', (req, res) => {
    res.status(200).json(books).end();
})
app.post('/book', (req, res) => {
    const book = {
        id: req.query.id,
        title: req.query.title,
        author: req.query.author,
        publishedDate: new Date(req.query.publisheddate) || ''
    }
    books.push(book);
    res.status(200).json({message: 'Book added'}).end()
})
app.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    const index = books.findIndex( book => book.id == id);
    if (index !== -1) {
        books.splice(index, 1);
        res.status(200).json({message: 'Book deleted'}).end();
    } else {
        res.status(200).json({message: 'Book not found'}).end();
    }
})
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});