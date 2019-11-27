import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-component-popup',
  templateUrl: './component-popup.component.html',
  styleUrls: ['./component-popup.component.scss']
})
export class ComponentPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ComponentPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }

}
