const RequiredParameterError = require( './errors/errors')

function requiredParam (param) {
  throw new RequiredParameterError(param)
}

exports.requiredParam = requiredParam;