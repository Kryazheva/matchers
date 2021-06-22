import data, { arrayHeroes } from '../match';

test('сортировка от большего к меньшему', () => {
  const result = data(arrayHeroes);
  expect(result).toBe([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});