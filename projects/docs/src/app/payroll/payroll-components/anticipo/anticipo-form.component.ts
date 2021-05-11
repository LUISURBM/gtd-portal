import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-value-dialog',
  template: `<h1 mat-dialog-title>Formulario Anticipo {{ data.id }}</h1>
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header card-header-primary">
                <h4 class="card-title">Agregar anticipo nuevo</h4>
                <p class="card-category">Información de anticipo</p>
              </div>
              <div class="card-body">
                <form [formGroup]="form">
                  <mat-form-field>
                    <input
                      matInput
                      tabindex="1"
                      formControlName="anticipo"
                      placeholder="Valor del anticipo"
                      id="anticipo"
                      type="text"
                      class="form-control"
                    />
                    <div
                      *ngIf="f.anticipo.touched && f.anticipo.invalid"
                      class="alert alert-danger"
                    >
                      <div *ngIf="f.anticipo.errors?.required">
                        anticipo is required.
                      </div>
                    </div>
                  </mat-form-field>
                  <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Fecha</mat-label>
                    <input
                      matInput
                      [matDatepicker]="picker"
                      formControlName="fecha"
                    />
                    <mat-datepicker-toggle
                      matSuffix
                      [for]="picker"
                    ></mat-datepicker-toggle>
                    <mat-datepicker touchUi #picker></mat-datepicker>
                  </mat-form-field>

                  <div mat-dialog-actions>
                    <button mat-button (click)="save()" tabindex="3">Guardar</button>
                    <button mat-button (click)="onNoClick()" tabindex="-1">
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> `,
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
      id: 0,
      anticipo: 0,
      fecha: new Date(),
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
