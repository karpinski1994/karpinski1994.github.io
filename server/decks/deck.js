
const requiredParam = require('../helpers/required-param');
const InvalidPropertyError = require('../helpers/errors/errors')

function makeDeck (
  deckData = requiredParam('deckData')
) {
  const validDeck = validate(deckData)
  const normalDeck = normalize(validDeck)
  return Object.freeze(normalDeck)

  function validate ({
    title = requiredParam('title'),
    description = requiredParam('description'),
    ...otherData
  } = {}) {
    validateText('title', title)
    validateText('description', description)
    return { title, description, ...otherData }
  }

  function validateText (label, title) {
    if (title.length < 3) {
      throw new InvalidPropertyError(
        `A product's ${label} title must be at least 2 characters long.`
      )
    }
  }
  
  function normalize ({ title, description, ...otherData }) {
    return {
      id: Math.floor(Math.random() * (1000000 - 1)) + 1,
      title,
      description,
       ...otherData,
    }
  }
}

module.exports = makeDeck;