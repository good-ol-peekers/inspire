export const sandboxAPI = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
    timeout: 3500,
})