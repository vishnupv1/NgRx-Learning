import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { throwError } from 'rxjs';
import { Observable, Subscription } from 'rxjs';
import { AppStateModel } from 'src/app/shared/state/Global/appstate.model';
import { blogModel } from 'src/app/shared/state/blog/blog.model';
import { getBlog } from 'src/app/shared/state/blog/blog.selector';
import { AddblogComponent } from '../addblog/addblog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  constructor(private store: Store<AppStateModel>, private dialog: MatDialog) {

  }
  blogList!: blogModel[]
  ngOnInit(): void {
    this.store.select(getBlog).subscribe(item => {
      this.blogList = item;
      console.log(this.blogList);

    })
  }

  addBlog() {
    this.Openpopup()
  }
  Openpopup() {
    this.dialog.open(AddblogComponent, {
      width: '40%'
    })
  }
}
