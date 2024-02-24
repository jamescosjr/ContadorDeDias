import { Router } from 'express';
import { calculateDifferenceController } from './controllers/dateController';

const routes = Router();

routes.post('/calculateDifference', calculateDifferenceController);

export default routes;