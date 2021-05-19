import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catalogs } from './otros-conceptos-data';
@Component({
  selector: 'app-otro-concepto-form-dialog',
  templateUrl: './otro-concepto-form.component.html',
})
export class OtroConceptoFormComponent {
  position = 'below';

  form: FormGroup;
  catalogs = catalogs;

  constructor(
    public dialogRef: MatDialogRef<OtroConceptoFormComponent>,
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

  number(value:any){return value +1;}
  parse(value: any): string {
    return value as string;
  }

  typeof(value: any): string | undefined {
    switch (typeof value?.value) {
      case 'string':
      case 'number':
        return typeof value?.value;
      case 'object':
        return Date.parse(value?.value) ? 'date' : typeof value?.value;
      default:
        return undefined;
    }
  }
}
