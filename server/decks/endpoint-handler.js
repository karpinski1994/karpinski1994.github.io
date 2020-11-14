const makeDeckList = require( './deck-list')
const makeDecksEndpointHandler = require( './decks-endpoint')
const Deck = require("../models/deck");

const deckList = makeDeckList(Deck)
const decksEndpointHandler = makeDecksEndpointHandler({ deckList })

module.exports = decksEndpointHandler