const HttpError = require("../models/http-error");
const makeProduct = require("./product")
function makeProductsEndpointHandler ({ deckList }) {
  return async function handle (httpRequest) {
    switch (httpRequest.method) {
      case 'POST':
        return postProduct(httpRequest)

      case 'GET':
        return getProducts(httpRequest)

      default:
        return new HttpError(`${httpRequest.method} method not allowed.`, 405);
    }
  }


  async function getProducts (httpRequest) {
    const { id } = httpRequest.pathParams || {}

    const result = id
    ? await deckList.findById({ productId: id })
    : await deckList.getAll()
    return {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: 200,
      data: JSON.stringify(result)
    }
  }

  async function postProduct (httpRequest) {
    console.log('post product')
    let productData = httpRequest.body
    if (!productData) {
      return new HttpError(
          'Bad request. No POST body.',
          400
        )
    }

    if (typeof httpRequest.body === 'string') {
      try {
        productData = JSON.parse(productData)
      } catch {
        return new HttpError(
          'Bad request. POST body must be valid JSON.',
          400
        )
      }
    }

    try {
      const product = makeProduct(productData)
      const result = await deckList.add(product)
      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 201,
        data: JSON.stringify(result)
      }
    } catch (e) {
      return new HttpError(
        'Server error',
        500
      )
    }
  }
}
module.exports = makeProductsEndpointHandler