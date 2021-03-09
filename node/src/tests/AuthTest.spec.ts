import request from 'supertest';

const ApiUrl = 'http://localhost:3000';

describe('POST /auth', () => {
  it('should return 200 and check message success is true - authenticate', () => {
    return request(ApiUrl)
      .post('/auth')
      .send({
        email: 'matheusss1@123.com.br',
        password: '1234',
      })
      .expect(200)
      .then(response => {
        expect(response.body.success).toEqual(true);
      });
  });
});
