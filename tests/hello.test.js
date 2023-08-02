const request = require('supertest')

describe('Test the api path', () => {
    test('It should response the GET method', async () => {
        const response = await request('http://localhost:3000').get('/api')
        expect(response.statusCode).toBe(200)
    })
})