/* eslint-disable no-console */
export const arrayHeroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export default function showHeroes(data) {
  return data.sort((a, b) => {
    if (b.health > a.health) {
      return 1;
    } if (b.health < a.health) {
      return -1;
    }
    return 0;
  });
}


// console.log(showHeroes(arrayHeroes));
