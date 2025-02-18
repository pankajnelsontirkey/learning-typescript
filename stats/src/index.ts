import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResults';

// const reader = new MatchReader('football.csv');
// reader.read();

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

let manUnitedWins = 0;

// for (let match of reader.data) {
for (let match of matchReader.matches) {
  if (
    (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
  ) {
    manUnitedWins += 1;
  }
}

console.log('manUnitedWins', manUnitedWins);
