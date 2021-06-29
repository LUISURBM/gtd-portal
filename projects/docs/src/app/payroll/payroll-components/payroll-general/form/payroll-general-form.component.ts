import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { MenuItems } from '../../../../shared/menu-items/menu-items';
import { NavigationService } from '../../../../srv/navigation.service';
import { MY_FORMATS } from '../../payroll-individual/payroll-individual-table.component';
import { catalogs } from '../payroll-data';
@Component({
  selector: 'app-payroll-general-form-dialog',
  templateUrl: './payroll-general-form.component.html',
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }],
})
export class PayrollGeneralFormComponent {
  position = 'below';

  form: FormGroup;
  catalogs = catalogs;
  private payrollDataUrl = environment.API_GATEWAY;

  constructor(
    public dialogRef: MatDialogRef<PayrollGeneralFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public builder: FormBuilder,
    public navSrv: NavigationService,
    public http: HttpClient,
    public menuItemsSrv: MenuItems
  ) {
    this.form = this.builder.group({
      id: '',
      fechaCorte: new Date(),
      nombre: this.builder.control('', [Validators.required]),
      descripcion: '',
      estado: 'TEST',
    });
    if (data) this.form.patchValue(data);
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

  closeDatePicker(eventData: any, dp?: any) {
    this.form.patchValue({ ...this.form.value, fechaCorte: eventData });
    dp.close();
  }

  get formValueJson() {
    return JSON.stringify({
      nominaGeneralId: this.form.value.id,
      fechaCorte: this.form.value.fechaCorte,
    });
  }
}
