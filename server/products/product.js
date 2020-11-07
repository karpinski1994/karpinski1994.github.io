
import requiredParam from '../helpers/required-param'
const InvalidPropertyError = require('../helpers/errors/errors')
export default function makeProduct (
  productData = requiredParam('productData')
) {
  const validProduct = validate(productData)
  const normalProduct = normalize(validProduct)
  return Object.freeze(normalProduct)

  function validate ({
    title = requiredParam('title'),
    description = requiredParam('description'),
    category = requiredParam('category'),
    ...otherData
  } = {}) {
    validateText('title', title)
    validateText('description', description)
    validateText('category', category)
    return { title, description, category, ...otherData }
  }

  function validateText (label, name) {
    if (name.length < 3) {
      throw new InvalidPropertyError(
        `A product's ${label} name must be at least 2 characters long.`
      )
    }
  }
  
  function normalize ({ category, title, description, ...otherData }) {
    return {
      ...otherData,
      title,
      description,
      category
    }
  }
}
