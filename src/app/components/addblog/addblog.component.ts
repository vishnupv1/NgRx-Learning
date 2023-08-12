import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { blogModel } from 'src/app/shared/state/blog/blog.model';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/shared/state/Global/appstate.model';
import { addBlog } from 'src/app/shared/state/blog/blog.action';


@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent {

  constructor(private dialogref: MatDialogRef<AddblogComponent>, private builder: FormBuilder,
    private store: Store<AppStateModel>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closePopup() {
    this.dialogref.close()
  }
  SaveBlogs() {
    if (this.blogform.valid) {
      const _bloginput: blogModel = {
        id: 0,
        title: this.blogform.value.title as string,
        description: this.blogform.value.description as string
      }
      this.store.dispatch(addBlog({ bloginput: _bloginput }))
      this.closePopup()
    }
  }
  blogform = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required)
  })

}
