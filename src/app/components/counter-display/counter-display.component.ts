import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent {
  constructor(private store: Store<{ counter: { counter: number } }>) {

  }
  counterdisplay!: number
  ngOnInit(): void {
    this.store.select('counter').subscribe(data => {
      this.counterdisplay = data.counter
    })
  }
}
