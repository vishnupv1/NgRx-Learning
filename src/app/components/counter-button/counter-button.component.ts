import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { decrement, increment, reset, rename } from 'src/app/shared/state/counter.action';
import { counterModel } from 'src/app/shared/state/counter.model';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent {
  constructor(private store: Store<{ counter: counterModel }>) {

  }
  onIncrement() {
    this.store.dispatch(increment())
  }
  onDecrement() {
    this.store.dispatch(decrement())
  }
  onReset() {
    this.store.dispatch(reset())
  }
  onRename() {
    this.store.dispatch(rename({ channel: 'vishnuv' }))
  }
}
