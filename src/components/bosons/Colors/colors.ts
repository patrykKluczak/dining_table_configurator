export const black = {
  black10: '#333333',
  black11: '#6F6F6F',
  black12: '#000000'
} as const

export const grey = {
  grey9: '#f5f5f5',
  grey10: '#f4f4f4',
  grey12: '#dbdbdb'
}

export const white = {
  white: '#FFFFFF'
} as const

export const transparent = {
  transparent1: 'transparent'
}

export const colors = {
  ...black,
  ...grey,
  ...white,
  ...transparent
} as const
