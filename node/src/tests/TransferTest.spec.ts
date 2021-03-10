import request from 'supertest';

const ApiUrl = 'http://localhost:3000';
const auth =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE1MjU3MTM2LCJleHAiOjE2MTUzNDM1MzZ9.nPyQFF6J2mKiksm32UwzqcnWLuF-tTeiQ1IJFsJnN3U';

describe('Get /transfers', () => {
  it('should return 200 and check message success is true - index', () => {
    return request(ApiUrl)
      .get('/transfers')
      .set('authorization', 'Bearer' + auth)
      .expect(200)
      .then(response => {
        expect(response.body.success).toEqual(true);
      });
  });
});

describe('POST /transfers', () => {
  it('should return 200 and check message success is true - store', () => {
    return request(ApiUrl)
      .post('/transfers')
      .set('authorization', 'Bearer' + auth)
      .send({
        value: 100,
        payer: 10,
        payee: 9,
      })
      .expect(200)
      .then(response => {
        expect(response.body.success).toEqual(true);
      });
  });
});
