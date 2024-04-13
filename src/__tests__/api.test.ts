import request from 'supertest';
import express, { Express } from 'express';
import routes from '../routes';

const app: Express = express();
app.use(express.json());
app.use(routes);

describe('API Date Difference Tests', () => {
  it('should return the days difference', async () => {
    const response = await request(app)
      .post('/calculateDifference')
      .send({
        startDate: '01-01-2024',
        endDate: '03-01-2024',
      });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ difference: 3 });
  });

  it('should return a 400 status code for invalid dates', async () => {
    const response = await request(app)
      .post('/calculateDifference')
      .send({
        startDate: 'invalid-date',
        endDate: 'also-invalid-date',
      });

    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });

  it('should return a 400 status code for endDate before startDate', async () => {
    const response = await request(app)
      .post('/calculateDifference')
      .send({
        startDate: '03-01-2024',
        endDate: '01-01-2024',
      });

    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });

  it('should return 1 when the startDate = endDate', async () => {
    const response = await request(app)
      .post('/calculateDifference')
      .send({
        startDate: '01-01-2024',
        endDate: '01-01-2024',
      });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ difference: 1 });
  });

  it('should return the days difference', async () => {
    const response = await request(app)
      .post('/calculateDifference')
      .send({
        startDate: '01-01-0001',
        endDate: '01-01-2024',
      });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ difference: 738886 });
  });
});