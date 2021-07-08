import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-value-dialog',
  templateUrl: './anticipo-form.component.html',
})
export class AnticipoFormComponent {
  position = 'below';

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AnticipoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public builder: FormBuilder
  ) {
    this.form = this.builder.group({
      id: this.builder.control(0),
      anticipo: this.builder.control(0, [Validators.required]),
    });
    this.form.patchValue(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  get f() {
    return this.form.controls;
  }
}
