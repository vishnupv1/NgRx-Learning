import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/app/shared/state/counter.action';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css']
})
export class CustomcounterComponent {
  constructor(private store: Store<{ counter: { counter: number } }>) {

  }
  counterInput !: number
  actionType: string = 'add'

  onCustomIncrement() {
    this.store.dispatch(customIncrement({ value: +this.counterInput, action: this.actionType }))
  }
}
