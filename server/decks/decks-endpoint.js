const HttpError = require("../models/http-error");
const makeDeck = require("./deck")

function makeDecksEndpointHandler ({ deckList }) {
  console.log("JPDLE")
  return async function handle (httpRequest) {
    console.log('httpRequest.method: ', httpRequest.method);
    switch (httpRequest.method) {
      case 'POST':
        return postDeck(httpRequest)

      case 'GET':
        return getDecks(httpRequest)
      
      case 'DELETE':
        return removeDeck(httpRequest)

      default:
        return new HttpError(`${httpRequest.method} method not allowed.`, 405);
    }
  }

  async function removeDeck(httpRequest) {
    const { id } = httpRequest.pathParams || {}
    const result = await deckList.remove({deckId: id})
    return {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: 200,
      data: JSON.stringify(result)
    }
  }


  async function getDecks (httpRequest) {
    const { id } = httpRequest.pathParams || {}
    const result = id
    ? await deckList.findById({ deckId: id })
    : await deckList.getAll()
    console.log('result: ', result);
    return {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: 200,
      data: JSON.stringify(result)
    }
  }

  async function postDeck (httpRequest) {
    let deckData = httpRequest.body
    // if (!productData) {
    //   return new HttpError(
    //       'Bad request. No POST body.',
    //       400
    //     )
    // }

    // if (typeof httpRequest.body === 'string') {
    //   try {
    //     productData = JSON.parse(productData)
    //   } catch {
    //     return new HttpError(
    //       'Bad request. POST body must be valid JSON.',
    //       400
    //     )
    //   }
    // }

    // try {
      const deck = makeDeck(deckData)
      const result = await deckList.add(deck)
      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 201,
        data: JSON.stringify(result)
      }
    // } catch (e) {
    //   return new HttpError(
    //     'Server error',
    //     500
    //   )
    // }
  }
}
module.exports = makeDecksEndpointHandler