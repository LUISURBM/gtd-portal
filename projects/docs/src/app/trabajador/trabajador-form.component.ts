import { Component, Inject, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InMemService } from '../srv/in-mem-service';
import { NavigationService } from '../srv/navigation.service';

@Component({
  selector: 'app-trabajador-form',
  templateUrl: './trabajador-form.component.html'
})
export class TrabajadorFormComponent {
  @ViewChild("formView") formView:any;
  position = 'below';
  form = new FormGroup({
    id: new FormControl(undefined),

    tipoDocumento: new FormControl(''),
    numeroDocumento: new FormControl(''),
    primerNombre: new FormControl(''),
    otrosNombres: new FormControl(''),
    primerApellido: new FormControl(''),
    segundoApellido: new FormControl(''),

    lugarTrabajoDepartamentoEstado: new FormControl(),
    lugarTrabajoDireccion: new FormControl(''),
    lugarTrabajoMunicipioCiudad: new FormControl(''),
    lugarTrabajoPais: new FormControl(''),

    altoRiesgoPension: new FormControl(false),
    codigoTrabajador: new FormControl(''),
    salarioIntegral: new FormControl(false),
    subTipoTrabajador: new FormControl(''),
    sueldo: new FormControl(0),
    tipoContrato: new FormControl(''),
    tipoTrabajador: new FormControl(''),
    fechaIngreso: new FormControl(new Date()),
    fechaRetiro: new FormControl(new Date()),
    direccion: new FormControl(''),
  });

  step = 0;

  constructor(
    public dialogRef: MatDialogRef<TrabajadorFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public inMemSrv: InMemService,
    public builder: FormBuilder
    ,public navSrv: NavigationService
  ) {
    this.form.patchValue(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.navSrv.navigate('/trabajador', this.form.value);
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
