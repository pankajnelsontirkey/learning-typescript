// import fs from 'fs';
import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils';

// const matches = fs
//   .readFileSync('football.csv', { encoding: 'utf-8' })
//   .split('\n')
//   .map((row: string): string[] => row.split(','));

const reader = new CsvFileReader('football.csv');
reader.read();

// const MatchResult = {
//   HomeWin: 'H',
//   AwayWin: 'A',
//   Draw: 'D'
// };

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

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
