import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-deducciones-form',
  styleUrls: ['./deducciones.component.scss'],
  templateUrl: './deducciones-form.component.html',
})
export class DeduccionesFormComponent {
  position = 'below';

  form: FormGroup;
  constructor(public builder: FormBuilder, private route: ActivatedRoute) {
    this.form = this.builder.group({
      id: builder.control(0),
      pensionVoluntaria: builder.control(0),
      retencionFuente: builder.control(0),
      afc: builder.control(0),
      cooperativa: builder.control(0),
      embargoFiscal: builder.control(0),
      planComplementarios: builder.control(0),
      educacion: builder.control(0),
      reintegro: builder.control(0),
      deuda: builder.control(0),
      anticipos: builder.array([])
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
