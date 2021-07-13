import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuItems } from '../../../shared/menu-items/menu-items';
@Component({
  selector: 'app-auxilio-form-dialog',
  templateUrl: './auxilio-form.component.html',
})
export class AuxilioFormComponent {
  position = 'below';

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AuxilioFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public builder: FormBuilder,
    public menuItemsSrv: MenuItems
  ) {
    this.form = this.builder.group({
      id: this.builder.control(undefined),
      auxilioNs: this.builder.control(0),
      auxilioS: this.builder.control(0),
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

  number(value: any) {
    return value + 1;
  }
  parse(value: any): string {
    return value as string;
  }
}
