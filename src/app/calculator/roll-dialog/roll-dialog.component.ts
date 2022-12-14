import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-roll-dialog',
  templateUrl: './roll-dialog.component.html',
  styleUrls: ['./roll-dialog.component.css']
})
export class RollDialogComponent {

  constructor(public dialogRef: MatDialogRef<RollDialogComponent>) { }

  public onCancel() {
    this.dialogRef.close({ event: "cancel" });
  }

  public onConfirm(addForm: NgForm) {
    this.dialogRef.close({ event: "confirm", data: addForm.value })
  }

}
