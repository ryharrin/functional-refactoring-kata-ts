import { getQueryParamsFromString } from './index'

const key1 = 'myKey1'
const value1 = 'myValue1'
const key2 = 'myKey2'
const value2 = 'myValue2'

describe('getQueryParamsFromString', () => {
  it('should return array of key and value for one param', () => {
    const actualParams = getQueryParamsFromString(`${key1}=${value1}`)

    expect(actualParams).toEqual([{key: key1, value: value1}])
  })
  it('should return array of key and value for two params', () => {
    const paramString = `${key1}=${value1}&${key2}=${value2}`
    const actualResult = getQueryParamsFromString(paramString)

    const expectedResult = [
      {key: key1, value: value1},
      {key: key2, value: value2}
    ]

    expect(actualResult).toEqual(expectedResult)
  })

  it('should return null for empty string', () => {
    const actualResult = getQueryParamsFromString('')

    expect(actualResult).toEqual(null)
  })

})