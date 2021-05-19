import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InMemService } from '../srv/in-mem-service';

@Component({
  selector: 'app-filter-value-dialog',
  template: `
    <h1 mat-dialog-title>Trabajador</h1>
    <form [formGroup]="form">
      <div mat-dialog-content>
        <mat-form-field appearance="fill">
          <mat-label>Tipo de Documento</mat-label>
          <mat-select>
            <mat-option value="one">Cedula de Ciudadania</mat-option>
            <mat-option value="two">Cedula de Extranjeria</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field>
          <input
            matInput
            tabindex="1"
            formControlName="numeroDocumento"
            placeholder="Numero de documento"
            id="numeroDocumento"
            type="number"
            class="form-control"
          />
          <div
            *ngIf="f.numeroDocumento.touched && f.numeroDocumento.invalid"
            class="alert alert-danger"
          >
            <div *ngIf="f.numeroDocumento.errors?.required">
              numero de documento is required.
            </div>
          </div>
        </mat-form-field>

        <mat-form-field>
          <input
            matInput
            tabindex="1"
            formControlName="primerNombre"
            placeholder="Primer Nombre"
            id="primerNombre"
            type="text"
            class="form-control"
          />
          <div
            *ngIf="f.primerNombre.touched && f.primerNombre.invalid"
            class="alert alert-danger"
          >
            <div *ngIf="f.primerNombre.errors?.required">
              nombre is required.
            </div>
          </div>
        </mat-form-field>

        <mat-form-field>
          <input
            matInput
            tabindex="1"
            formControlName="otrosNombres"
            placeholder="Segundo Nombre"
            id="otrosNombres"
            type="text"
            class="form-control"
          />
          <div
            *ngIf="f.otrosNombres.touched && f.otrosNombres.invalid"
            class="alert alert-danger"
          ></div>
        </mat-form-field>

        <mat-form-field>
          <input
            matInput
            tabindex="1"
            formControlName="primerApellido"
            placeholder="Apellido"
            id="primerApellido"
            type="text"
            class="form-control"
          />
          <div
            *ngIf="f.primerApellido.touched && f.primerApellido.invalid"
            class="alert alert-danger"
          >
            <div *ngIf="f.primerApellido.errors?.required">
              Apellido is required.
            </div>
          </div>
        </mat-form-field>

        <mat-form-field>
          <input
            matInput
            tabindex="1"
            formControlName="segundoApellido"
            placeholder="Segundo Apellido"
            id="segundoApellido"
            type="text"
            class="form-control"
          />
          <div
            *ngIf="f.segundoApellido.touched && f.segundoApellido.invalid"
            class="alert alert-danger"
          >
            <div *ngIf="f.segundoApellido.errors?.required">
              Segundo Apellido is required.
            </div>
          </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Oficina</mat-label>
          <mat-select>
            <mat-option value="one">Oficina Modelia</mat-option>
          </mat-select>
        </mat-form-field>

        <section class="riesgo-section">
          <mat-checkbox class="example-margin">Alto Riesgo</mat-checkbox>
        </section>

        <section class="integral-section">
          <mat-checkbox class="example-margin">Salario Interal</mat-checkbox>
        </section>
      </div>
      <div mat-dialog-actions>
        <button mat-button (click)="save()" tabindex="3">Ok</button>
        <button mat-button (click)="onNoClick()" tabindex="-1">
          No Thanks
        </button>
      </div>
    </form>
  `,
})
export class FilterValueComponent {
  position = 'below';
  form = new FormGroup({
    id: new FormControl(undefined),

    tipoDocumento: new FormControl(''),
    numeroDocumento: new FormControl(Number),
    primerNombre: new FormControl(''),
    otrosNombres: new FormControl(''),
    primerApellido: new FormControl(''),
    segundoApellido: new FormControl(''),

    lugarTrabajoDepartamentoEstado: new FormControl(),
    lugarTrabajoDireccion: new FormControl(''),
    lugarTrabajoMunicipioCiudad: new FormControl(Number),
    lugarTrabajoPais: new FormControl(''),

    altoRiesgoPension: new FormControl(Boolean),
    codigoTrabajador: new FormControl(Number),
    salarioIntegral: new FormControl(Boolean),
    subTipoTrabajador: new FormControl(),
    sueldo: new FormControl(Number),
    tipoContrato: new FormControl(),
    tipoTrabajador: new FormControl(),
  });

  step = 0;

  constructor(
    public dialogRef: MatDialogRef<FilterValueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public inMemSrv: InMemService,
    public builder: FormBuilder
  ) {
    this.form.patchValue(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  get f() {
    return this.form.controls;
  }
}
