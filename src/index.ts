export type QueryParam = {
  key: string,
  value: string
}

export type QueryParams = QueryParam[]


const splitString = (splitter: string) => (str: string) => str.split(splitter)

const splitByAmpersand = (paramString: string): string[] => splitString('&')(paramString)

const splitToPairByEquals = (paramString: string): string[] =>
  paramString.includes('=') ? splitString('=')(paramString) : [paramString, null]

const pairToQueryParam = (arr: string[]) => ({key: arr[0], value: arr[1]})

const paramStringToQueryParam = (paramString: string): QueryParam => pairToQueryParam(splitToPairByEquals(paramString))

const extractParams = (paramString: string) => splitByAmpersand(paramString).map(paramStringToQueryParam)



export const getQueryParamsFromString =
  (paramString: string): QueryParams => paramString ? extractParams(paramString) : null