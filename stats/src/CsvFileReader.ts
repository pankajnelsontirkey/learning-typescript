import fs from 'fs';

export abstract class CsvFileReader {
  data: any = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): /* MatchData */ any;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}
