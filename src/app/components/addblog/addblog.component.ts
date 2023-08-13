import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addBlog, updateBlog } from 'src/app/shared/state/blog/blog.action';
import { blogModel } from 'src/app/shared/state/blog/blog.model';
import { getblogbyid } from 'src/app/shared/state/blog/blog.selector';
import { AppStateModel } from 'src/app/shared/state/Global/appstate.model';
//import { loadspinner } from 'src/app/shared/store/Global/App.Action';


@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  pagetitle = ''
  editblogid = 0
  editdata!: blogModel
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
  constructor(private dialogref: MatDialogRef<AddblogComponent>, private builder: FormBuilder,
    private store: Store<AppStateModel>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  ngOnInit(): void {
    if (this.data.isedit) {
      this.editblogid = this.data.id
      this.store.select(getblogbyid(this.editblogid)).subscribe(_data => {
        this.editdata = _data
        this.blogform.setValue({ id: this.editdata.id, title: this.editdata.title, description: this.editdata.description })
      })
    }
  }


}
