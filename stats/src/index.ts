import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((row: string): string[] => row.split(','));

// console.log('matches', matches);

let manUnitedWins = 0;

for (let match of matches) {
  if (
    (match[1] === 'Man United' && match[5] === 'H') ||
    (match[2] === 'Man United' && match[5] === 'A')
  ) {
    manUnitedWins += 1;
  }
}

console.log('manUnitedWins', manUnitedWins);
