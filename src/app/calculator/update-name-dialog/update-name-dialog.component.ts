import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-name-dialog',
  templateUrl: './update-name-dialog.component.html',
  styleUrls: ['./update-name-dialog.component.css']
})
export class UpdateNameDialogComponent {

  constructor(public dialogRef: MatDialogRef<UpdateNameDialogComponent>) { }

  public onCancel() {
    this.dialogRef.close({ event: "cancel" });
  }

  public onConfirm(addForm: NgForm) {
    this.dialogRef.close({ event: "confirm", data: addForm.value })
  }

}
