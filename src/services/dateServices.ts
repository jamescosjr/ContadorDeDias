import { differenceInDays, addDays, parse, isValid, isBefore } from 'date-fns';

export function calculateDifference(startDate: string, endDate: string): number {
  const parsedStartDate = parse(startDate, 'dd-MM-yyyy', new Date());
  const parsedEndDate = parse(endDate, 'dd-MM-yyyy', new Date());

  if (!isValid(parsedStartDate) || !isValid(parsedEndDate)) {
    throw new Error('Datas inválidas. Certifique-se de que elas estão no formato dd-MM-yyyy.');
  }

  if (isBefore(parsedEndDate, parsedStartDate)) {
    throw new Error('A data de término deve ser posterior à data de início.');
  }

  // Adiciona 1 dia ao endDate para incluir o próprio dia, como se conta para quem trabalha embarcado.
  const endDateInclusive = addDays(parsedEndDate, 1);

  return differenceInDays(endDateInclusive, parsedStartDate);
}