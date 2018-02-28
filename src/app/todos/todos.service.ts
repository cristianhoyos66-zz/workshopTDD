import { Injectable } from '@angular/core';
import { from } from 'rxjs/observable/from';

@Injectable()
export class TodosService {

  getTodos() {
    return from([]);
  }

}
