import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-devengados-form',
  styleUrls: ['./devengados.component.scss'],
  templateUrl: './devengados-form.component.html',
})
export class DevengadosFormComponent {
  position = 'below';

  form: FormGroup;
  constructor(public builder: FormBuilder, private route: ActivatedRoute) {
    this.form = this.builder.group({
      id: builder.control(0),
      basicoId: builder.control(1),
      primasId: builder.control(1),
      cesantiasId: builder.control(1),
      dotacion: builder.control(0),
      apoyoSost: builder.control(0),
      teletrabajo: builder.control(0),
      bonifRetiro: builder.control(0),
      indemnizacion: builder.control(0),
      reintegro: builder.control(1),
      basico: builder.group({
        diasTrabajados: builder.control(12),
        sueldoTrabajado: builder.control(34),
      }),
      trabajador: builder.group({
        primerNombre: builder.control(''),
      }),
    });

    this.route.queryParams.subscribe((params) => {
      const data1 = params['data'];
      this.form.patchValue(data1);
    });
  }

  onNoClick(): void {}

  save() {}

  get f() {
    return this.form.controls;
  }
}
