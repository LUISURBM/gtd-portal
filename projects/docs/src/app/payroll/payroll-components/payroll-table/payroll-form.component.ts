import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'projects/docs/src/environments/environment';
import { NavigationService } from '../../../srv/navigation.service';
import { catalogs, Payroll } from './payroll-data';
@Component({
  selector: 'app-payroll-form-dialog',
  templateUrl: './payroll-form.component.html',
})
export class PayrollFormComponent {
  position = 'below';

  form: FormGroup;
  catalogs = catalogs;
  private payrollDataUrl = environment.API_GATEWAY;


  constructor(public builder: FormBuilder, private route: ActivatedRoute
    ,private router: Router
    ,public navSrv: NavigationService
    ,public http: HttpClient,

    ) {
    this.form = this.builder.group({
      id: 0,
      fechaInicio: new Date(),
      fechaFin: new Date(),
      cantidad: 0,
      pago: 0,
      catalog: catalogs[0],
      nombre: '',
      estado: '',
    });
    this.route.queryParams.subscribe(params => {
      const data1 = params['data'];
      this.form.patchValue(data1);
    });

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':`82e2f0e5-30b2-4e6b-a7ce-99fa407d3b68` })
    };
    this.http.get<string>(this.payrollDataUrl + 'documents/primas/list', httpOptions).subscribe( data => {
      console.dir(data);

    });
    this.http.post<string>(this.payrollDataUrl + 'documents/primas/send-list', [], httpOptions).subscribe(data => {
      console.dir(data);
    });
  }

  onNoClick(): void {
    this.navSrv.navigate('nómina');
  }

  save() {

  }

  nav = (route:string) => this.navSrv.navigate(route);

  get f() {
    return this.form.controls;
  }
}
