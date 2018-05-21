import { pickBy, toPairs, pipe, map, join } from 'lodash/fp'

const pickNotUndefined = pickBy(val => val !== undefined)

export const objectToQueryString = pipe(
  pickNotUndefined,
  toPairs,
  map(pipe(map(encodeURIComponent), join('='))),
  join('&'),
)
