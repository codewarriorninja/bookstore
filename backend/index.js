import express from 'express'
import connectDB from './db/dbConnection.js'
import booksRouter from './routers/booksRoute.js'
import cors from 'cors'
const app = express();

app.use(express.json());

app.use(cors());


const DATABASE_URL = process.env.DATABASE_URL || 'mongodb+srv://root:root@books-store.sxqt0.mongodb.net/books-collection?retryWrites=true&w=majority&appName=Books-Store'
const port = process.env.PORT || 8080


app.use('/books', booksRouter);
connectDB(DATABASE_URL);

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
});
