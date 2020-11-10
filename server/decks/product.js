
const requiredParam = require('../helpers/required-param');
const InvalidPropertyError = require('../helpers/errors/errors')

function makeProduct (
  productData = requiredParam('productData')
) {
  const validProduct = validate(productData)
  const normalProduct = normalize(validProduct)
  return Object.freeze(normalProduct)

  function validate ({
    name = requiredParam('name'),
    description = requiredParam('description'),
    category = requiredParam('category'),
    ...otherData
  } = {}) {
    validateText('name', name)
    validateText('description', description)
    validateText('category', category)
    return { name, description, category, ...otherData }
  }

  function validateText (label, name) {
    if (name.length < 3) {
      throw new InvalidPropertyError(
        `A product's ${label} name must be at least 2 characters long.`
      )
    }
  }
  
  function normalize ({ name, description, category, ...otherData }) {
    return {
      ...otherData,
      name,
      description,
      category
    }
  }
}

module.exports = makeProduct;