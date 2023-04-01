require('dotenv').config();
var cors = require('cors');
const path = require("path");
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require("./routes/courses")


mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors());
app.use(express.json({ extended: false }));


app.use('/api', routes)


 app.use(express.static(path.join(__dirname, "./client/clbuild")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/clbuild/index.html"));
});


app.listen(process.env.PORT, () => {
    console.log(`Server Started at ${process.env.PORT}`)
})