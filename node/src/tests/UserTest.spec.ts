import request from 'supertest';
const ApiUrl = 'http://localhost:3000';

describe('Get /auth', () => {
  const auth =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE1MzM3ODEyLCJleHAiOjE2MTU0MjQyMTJ9.wE5OR73ej-93DXn2X_GNHAFJt5HHlmG9S81xvnkuMU8';

  it('should return 200 and check message success is true - index', () => {
    return request(ApiUrl)
      .get('/auth')
      .set('authorization', 'Bearer' + auth)
      .expect(200)
      .then(response => {
        expect(response.body.success).toEqual(true);
      });
  });
});

describe('Get /users', () => {
  it('should return 200 and check message success is true - indexAll', () => {
    return request(ApiUrl)
      .get('/users')
      .expect(200)
      .then(response => {
        expect(response.body.success).toEqual(true);
      });
  });
});

describe('POST /users', () => {
  it('should return 200 and check message success is true - store', () => {
    return request(ApiUrl)
      .post('/users')
      .send({
        name: 'matheus santos',
        cpfCnpj: '12345655487254',
        email: 'matheus@santoooss.com.br',
        password: '1234',
        type: 'c',
        value: 500,
      })
      .expect(200)
      .then(response => {
        expect(response.body.success).toEqual(true);
      });
  });
});
