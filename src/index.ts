export type QueryParam = {
  key: string,
  value: string
}

export type QueryParams = QueryParam[]


const splitString = (splitter: string) => (str: string) => str.split(splitter)

const splitByAmpersand = (paramString: string): string[] => splitString('&')(paramString)

const splitByEquals = (paramString: string): string[] => splitString('=')(paramString)

const pairToQueryParam = (arr: string[]) => ({key: arr[0], value: arr[1] ? arr[1] : null })

const splitToPair = (paramString: string): QueryParam => pairToQueryParam(splitByEquals(paramString))

const map = <T> (arr: Array<T>, fn: (value: T) => any) : Array<any> => arr.map(fn)

const extractParams = (paramString: string) => map(splitByAmpersand(paramString), splitToPair)


export const getQueryParamsFromString =
  (paramString: string): QueryParams => paramString ? extractParams(paramString) : null