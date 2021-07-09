import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppStateService } from '../../../srv/app-state.service';

@Component({
  selector: 'app-prima-form-dialog',
  templateUrl: './prima-form.component.html',
})
export class PrimaFormComponent {
  position = 'below';

  form: FormGroup;

  constructor(
    public stateSrv: AppStateService,
    public dialogRef: MatDialogRef<PrimaFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public builder: FormBuilder
  ) {
    this.form = this.builder.group({
      id: this.builder.control(''),
      cantidad: this.builder.control(0),
      pagoNs: this.builder.control(0),
      pago: this.builder.control(0),
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
