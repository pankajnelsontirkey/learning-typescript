import { WinsAnalysis } from './Analyzers/WinsAnalysis';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');

matchReader.load();

/* No. of 'Man United' wins as console output... */
const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);
summary.buildAndPrintReport(matchReader.matches);

/* No. of 'Liverpool' wins as html report... */
Summary.winsForTeamHtmlReport('Liverpool').buildAndPrintReport(
  matchReader.matches
);
