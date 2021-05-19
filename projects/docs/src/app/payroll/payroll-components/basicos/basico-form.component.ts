import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-basico-form-dialog',
  templateUrl: './basico-form.component.html',
})
export class BasicoFormComponent {
  position = 'below';

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<BasicoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public builder: FormBuilder
  ) {
    this.form = this.builder.group(data);
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

  number(value: any) {
    return value + 1;
  }
  parse(value: any): string {
    return value as string;
  }

}
