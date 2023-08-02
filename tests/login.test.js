const request = require('supertest')
const baseUrl = 'http://localhost:3000/api'
const payload = {
  email: 'adepriyantowidies@gmail.com',
  password: 'widies123'
}

describe('Test the login endpoint', () => {
  test('It should response the token', async () => {
    const response = await request(baseUrl)
      .post('/login')
      .send(payload)
    expect(response.statusCode).toBe(200)
  })
})
