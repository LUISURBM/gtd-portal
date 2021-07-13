import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { switchMap, tap } from 'rxjs/operators';
import { AppStateService } from '../../../srv/app-state.service';
import { gtdDateTime, gtdDate } from '../../../types/common-types';
import { catalogs } from './vacacion-data';
@Component({
  selector: 'app-vacacion-form-dialog',
  templateUrl: './vacacion-form.component.html',
})
export class VacacionFormComponent {
  position = 'below';

  form: FormGroup;
  catalogs = catalogs;

  constructor(
    public stateSrv: AppStateService,
    public dialogRef: MatDialogRef<VacacionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public builder: FormBuilder
  ) {
    this.form = this.builder.group({
      id: 0,
      fechaInicio: gtdDate(new Date()),
      fechaFin: gtdDate(new Date()),
      cantidad: 0,
      pago: 0,
      catalog: catalogs[1],
      valueCatalogName: catalogs[1],
    });
    this.form.patchValue({...data,
      fechaInicio: gtdDate(data?.fechaInicio ?? new Date()),
      fechaFin: gtdDate(data?.fechaFin ?? new Date()),
    });
    this.form.valueChanges.pipe(
      tap({
        next: (d: any) => {
          if (catalogs[0] !== d.valueCatalogName) {
            this.form.patchValue(
              {
                ...d,
                fechaInicio: undefined,
                fechaFin: undefined,
              },
              { emitEvent: false }
            );
          }
        },
      })
    );
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
