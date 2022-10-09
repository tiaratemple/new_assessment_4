const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getBooks } = require('./controller')
const { addBooks } = require('./controller')
const { deleteBooks } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/books", getBooks);
app.post("/api/books", addBooks);
app.delete("/api/books/:id", deleteBooks)




app.listen(4000, () => console.log("Server running on 4000"));

