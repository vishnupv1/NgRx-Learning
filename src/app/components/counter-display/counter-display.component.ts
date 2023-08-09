import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { counterModel } from 'src/app/shared/state/counter.model';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit, OnDestroy {
  constructor(private store: Store<{ counter: counterModel }>) {

  }
  ngOnDestroy(): void {
    if (this.countersubscribe) {
      this.countersubscribe.unsubscribe()
    }
  }
  counterdisplay!: number
  channelname: string = ''
  countersubscribe!: Subscription

  ngOnInit(): void {
    this.countersubscribe = this.store.select('counter').subscribe(data => {
      this.counterdisplay = data.counter
      this.channelname = data.channelname
    })
  }
}
