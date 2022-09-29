import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateAsksService {
  dataAsks = new BehaviorSubject<any>([]);

  constructor() {}
}
