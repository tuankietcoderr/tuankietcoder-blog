const LOCAL_STORAGE_TOKEN_NAME = 'kblog-token'
const BASE_API_URL =
  process.env.NODE_ENV !== 'developement'
    ? 'http://localhost:3000'
    : 'https://www.tuankietcoder.tech'

export { LOCAL_STORAGE_TOKEN_NAME, BASE_API_URL }
