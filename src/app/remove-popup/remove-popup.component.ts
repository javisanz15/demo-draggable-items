import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-remove-popup',
  templateUrl: './remove-popup.component.html',
  styleUrls: ['./remove-popup.component.scss']
})
export class RemovePopupComponent implements OnInit {

  public form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<RemovePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  public buildForm() {
    this.form = this.fb.group({
      selection: [null],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
