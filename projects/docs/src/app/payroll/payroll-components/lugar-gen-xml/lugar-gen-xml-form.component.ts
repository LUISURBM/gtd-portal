import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  catalogsCiudades,
  catalogsDepartamentos,
  catalogsIdiomas,
  catalogsPaises,
} from './lugar-gen-xml-data';
@Component({
  selector: 'app-lugar-gen-xml-form-dialog',
  templateUrl: './lugar-gen-xml-form.component.html',
})
export class LugarGeneracionXMLFormComponent {
  position = 'below';

  form: FormGroup;
  catalogsCiudades = catalogsCiudades;
  catalogsDepartamentos = catalogsDepartamentos;
  catalogsIdiomas = catalogsIdiomas;
  catalogsPaises = catalogsPaises;

  constructor(
    public dialogRef: MatDialogRef<LugarGeneracionXMLFormComponent>,
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
}
