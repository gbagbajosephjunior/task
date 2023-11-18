import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comfirmation',
  templateUrl: './comfirmation.component.html',
  styleUrls: ['./comfirmation.component.scss']
})
export class ComfirmationComponent {
  constructor(
    public dialogRef: MatDialogRef<ComfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
