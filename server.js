const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-network-MDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(routes);
app.listen(PORT, () => {
    console.log("app started in port 3001");
} )
