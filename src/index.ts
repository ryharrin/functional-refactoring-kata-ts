export function getQueryParamsFromString (paramString: string) {
  return paramString ? splitString(paramString, '&').map(param => splitToPair(param, '=')) : null
}

const splitString = (str, splitor) => str.split(splitor)
const indexOfSeparator = (str, separator) => str.indexOf(separator)

function splitToPair (paramString: string, separator: string) {
  const [a, b] = splitString(paramString, separator)
  return {key: a, value: b}
}