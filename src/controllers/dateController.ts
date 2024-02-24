import { Request, Response } from 'express';
import { calculateDifference } from '../services/dateServices';

export function calculateDifferenceController(req: Request, res: Response) {
  const { startDate, endDate } = req.body;

  try {
    const difference = calculateDifference(startDate, endDate);
    res.json({ difference });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}