// import fs from 'fs';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResults';

// const matches = fs
//   .readFileSync('football.csv', { encoding: 'utf-8' })
//   .split('\n')
//   .map((row: string): string[] => row.split(','));

// const reader = new CsvFileReader('football.csv');
const reader = new MatchReader('football.csv');
reader.read();

// const MatchResult = {
//   HomeWin: 'H',
//   AwayWin: 'A',
//   Draw: 'D'
// };

let manUnitedWins = 0;

for (let match of reader.data) {
  if (
    (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
  ) {
    manUnitedWins += 1;
  }
}

console.log('manUnitedWins', manUnitedWins);

console.log(reader.data[0]);
