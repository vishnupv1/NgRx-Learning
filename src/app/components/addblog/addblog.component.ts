import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent {

  constructor(private dialogref: MatDialogRef<AddblogComponent>) {

  }
  closePopup() {
    this.dialogref.close()
  }
}
