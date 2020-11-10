const makeDeckList = require( './deck-list')
const makeProductsEndpointHandler = require( './decks-endpoint')
const Deck = require("../models/deck");

const deckList = makeDeckList(Deck)
const decksEndpointHandler = makeProductsEndpointHandler({ deckList })

module.exports = decksEndpointHandler