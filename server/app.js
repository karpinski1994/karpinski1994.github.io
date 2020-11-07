const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const adaptRequest = require("./helpers/adapt-request");
const handleProductsRequest = require("./products/endpoint-handler");
const HttpError = require("./models/http-error");
const cors = require('cors')
const dotenv = require("dotenv")
dotenv.config()
const app = express();
app.use(cors())
app.use(bodyParser.json());


app.all('/products', productsController)
app.get('/products/:id', productsController)

function productsController (req, res) {
  const httpRequest = adaptRequest(req)
  handleProductsRequest(httpRequest)
    .then(({ headers, statusCode, data }) =>
    {
      console.log('app data: ', data);
      console.log('app headers: ', headers);
        
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
mongoose
  .connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@products-management.1nxya.mongodb.net/products-management?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
