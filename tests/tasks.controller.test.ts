
import request from 'supertest';
import app from '../src/app';
import { emprunts } from '../src/models/borrow.model';

beforeEach(() => {
  emprunts.length = 0;
});

describe('Emprunts API', () => {

  it('POST /api/emprunts should create a new borrow', async () => {
    const response = await request(app)
      .post('/api/emprunts')
      .send({ userId: 1, bookId: 10 });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('userId', 1);
    expect(response.body).toHaveProperty('bookId', 10);
  });

  it('POST /api/emprunts should return 400 when userId or bookId missing', async () => {
    const response = await request(app)
      .post('/api/emprunts')
      .send({ bookId: 10 });

    expect(response.status).toBe(400);
  });

  it('PUT /api/emprunts/:id/prolong should prolong a borrow', async () => {

    const initialDate = new Date();
    emprunts.push({
      id: 1,
      userId: 1,
      bookId: 10,
      borrowedAt: new Date(),
      dueDate: new Date(initialDate)
    });

    const response = await request(app)
      .put('/api/emprunts/1/prolong')
      .send();

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', 1);

    expect(new Date(response.body.dueDate).getTime())
      .toBeGreaterThan(initialDate.getTime());
  });

  it('PUT /api/emprunts/:id/prolong should return 404 if borrow does not exist', async () => {
    const response = await request(app)
      .put('/api/emprunts/999/prolong');

    expect(response.status).toBe(404);
  });

  it('GET /api/emprunts should return all borrows', async () => {
    emprunts.push({
      id: 1,
      userId: 1,
      bookId: 10,
      borrowedAt: new Date(),
      dueDate: new Date()
    });

    const response = await request(app)
      .get('/api/emprunts');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
  });

});
