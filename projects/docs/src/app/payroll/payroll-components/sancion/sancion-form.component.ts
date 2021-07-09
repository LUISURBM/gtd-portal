import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppStateService } from '../../../srv/app-state.service';

@Component({
  selector: 'app-filter-value-dialog',
  templateUrl: './sancion-form.component.html',
})
export class SancionFormComponent {
  position = 'below';

  form: FormGroup;

  constructor(
    public stateSrv: AppStateService,
    public dialogRef: MatDialogRef<SancionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public builder: FormBuilder
  ) {
    this.form = this.builder.group({
      id: 0,
      sancionPriv: 0,
      sancionPublic: 0,
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
