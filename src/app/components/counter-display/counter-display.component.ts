import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { counterModel } from 'src/app/shared/state/counter.model';
import { getCounter } from 'src/app/shared/state/counter.selector';
import { AppStateModel } from 'src/app/shared/state/Global/appstate.model';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit, OnDestroy {
  constructor(private store: Store<AppStateModel>) {

  }
  ngOnDestroy(): void {
    // if (this.countersubscribe) {
    //   this.countersubscribe.unsubscribe()
    // }
  }
  counterdisplay!: number
  countersubscribe!: Subscription

  counter$ !: Observable<AppStateModel>

  ngOnInit(): void {
    this.countersubscribe = this.store.select(getCounter).subscribe(data => {
      this.counterdisplay = data
      console.log('counter')

    })
    //this.counter$ = this.store.select('counter')
  }
}
