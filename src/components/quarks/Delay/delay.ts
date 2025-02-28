export const delay = (ms: number) => {
  if (process.env.NODE_ENV === 'test') return Promise.resolve()

  return new Promise((resolve) => setTimeout(resolve, ms))
}
