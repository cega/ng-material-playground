import { InMemoryDbService } from 'angular-in-memory-web-api';

import data from "../data/db.json";

export class DataService implements InMemoryDbService {
  createDb() {
    let categories = data["categories"];
    let questions  = data["questions"];

    return { categories, questions };
  }
}