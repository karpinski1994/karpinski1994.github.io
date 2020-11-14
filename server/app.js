const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const adaptRequest = require("./helpers/adapt-request");
const handleDecksRequest = require("./decks/endpoint-handler");
const HttpError = require("./models/http-error");
const cors = require('cors')
const dotenv = require("dotenv")
dotenv.config()
const app = express();
app.use(cors())
app.use(bodyParser.json());


app.all('/decks', decksController)
app.get('/decks/:id', decksController)
app.delete('/decks/:id', decksController)

function decksController (req, res) {
  const httpRequest = adaptRequest(req)
  handleDecksRequest(httpRequest)
    .then(({ headers, statusCode, data }) =>
    {
        res
        .set(headers)
        .status(statusCode)
        .send(data)}
    )
    .catch(e => res.status(500).end())
}

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});
// TODO: Database connection should be extracted somewhere and it's instance injected to app 
// TODO: Business logic should be framework agnostic
const port = process.env.PORT || 8000;
app.listen(port, () => {console.log(`App listening on the port ${port}...`)});
// mongoose
//   .connect(
//         ` mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@decks.1nxya.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
//         { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .then(() => {
    // app listen
//   })
//   .catch((err) => {
//     console.log(err);
//   });
