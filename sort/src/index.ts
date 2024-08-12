import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumberCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection("tyPescRipT");

const numberSorter = new Sorter(numbersCollection);
const charSorter = new Sorter(charactersCollection);

numberSorter.sort();
charSorter.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
