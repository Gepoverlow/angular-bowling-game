import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateDialogComponent>) { }

  ngOnInit(): void {
  }

  public onCancel() {
    this.dialogRef.close({ event: "cancel" });
  }

  public onConfirm(addForm: NgForm) {
    this.dialogRef.close({ event: "confirm", data: addForm.value })
  }

}
