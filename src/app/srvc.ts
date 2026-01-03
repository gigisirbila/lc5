import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class Srvc {
  private readonly _count$ = new BehaviorSubject<number>(0);

  readonly count$ = this._count$.asObservable();

  increment() {
    this._count$.next(this._count$.value + 1);
  }

  decrement() {
    this._count$.next(this._count$.value - 1);
  }

  get value() {
    return this._count$.value;
  }
}
