const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const mongoURL = "mongodb+srv://Mintu3344:Mintu3344@cluster0.tgx9fmn.mongodb.net/books"

const app = express();
app.use(express.json())
app.use(cors());
const port = 3001;

const Schema = mongoose.Schema;
const bookSchema = new Schema({
    bookTitle: String,
    authorName: String,
    imageURL: String,
    category: String,
    bookDescription: String,
    bookPDFURL: String
})

const BookModel = mongoose.model('Bookmodel', bookSchema, 'books');

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log("can't connect to DB", err);
    })

app.get('/allbooks', async (req, res) => {
    try {
        const data = await BookModel.find({});
        res.json(data);
    }
    catch (err) {
        console.error('Error retrieving data: ', err);
        res.status(500).json({ error: 'An error occurred while retrieving data' });
    }
})
app.post('/upload_books', async (req, res) => {
    const uploadBookData = req.body;
    const result = await BookModel.create(uploadBookData);
    res.json(result);
})

app.get('/book/:id', async (req, res) => {
    try {
        const bookId = req.params.id;
        const book = await BookModel.findById(bookId);
        res.json(book);
    } catch (err) {
        console.error('Error retrieving book details: ', err);
        res.status(500).json({ error: 'An error occurred while retrieving book details' });
    }
});

app.listen(port, () => {
    console.log(`DB connected to port ${port}`);
})