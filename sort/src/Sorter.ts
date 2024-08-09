import { NumbersCollection } from "./NumberCollection";

interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collecton: Sortable) {}

  sort(): void {
    for (let i = 0; i < this.collecton.length; i++) {
      for (let j = 0; j < this.collecton.length - i - 1; j++) {
        if (this.collecton.compare(j, j + 1)) {
          this.collecton.swap(j, j + 1);
        }
      }
    }
  }
}
