import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/app/shared/state/counter.action';
import { counterModel } from 'src/app/shared/state/counter.model';
import { Subscription } from 'rxjs';
import { getChannel } from 'src/app/shared/state/counter.selector';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css']
})
export class CustomcounterComponent implements OnInit {
  constructor(private store: Store<{ counter: counterModel }>) {

  }

  counterInput!: number
  actionType: string = 'add'
  channelname = ''
  countersubscribe!: Subscription

  ngOnInit(): void {
    this.countersubscribe = this.store.select(getChannel).subscribe(data => {
      this.channelname = data
      console.log('channelName')
    })
    //this.counter$ = this.store.select('counter')
  }

  onCustomIncrement() {
    this.store.dispatch(customIncrement({ value: +this.counterInput, action: this.actionType }))
  }
}
