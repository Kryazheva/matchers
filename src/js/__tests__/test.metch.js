import data, { arrayHeroes } from '../match';

test('сортировка от большего к меньшему', () => {
  const result = data(arrayHeroes);
  expect(result).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});

test('сортировка от большего к меньшему arrayHeroes', () => {
  const result = data(arrayHeroes);
  expect(result).not.toBe([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});
