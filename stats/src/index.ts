import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResults';

const reader = new MatchReader('football.csv');

reader.read();

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
