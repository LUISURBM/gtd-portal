
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { NavigationService } from '../../../srv/navigation.service';
import { catalogs } from '../payroll-general/payroll-data';
import { animationsForm } from "../../../animations/form-animation";
@Component({
  selector: 'app-payroll-individual-form-dialog',
  templateUrl: './payroll-individual-form.component.html',
  animations: animationsForm
})
export class PayrollIndividualFormComponent {
  position = 'below';
  @ViewChild("formView") formView:any;


  form: FormGroup;
  catalogs = catalogs;
  private payrollDataUrl = environment.API_GATEWAY;
  state = "closed";

  constructor(
    public builder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public navSrv: NavigationService,
    public http: HttpClient
    ,private elRef:ElementRef
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
    this.route.queryParams.subscribe((params) => {
      const data1 = params['data'];
      this.form.patchValue(data1);
    });

    const httpOptions = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: `82e2f0e5-30b2-4e6b-a7ce-99fa407d3b68`,
      }),
    };
    this.http
      .get<string>(this.payrollDataUrl + 'documents/primas/list', httpOptions)
      .subscribe((data) => {
        console.dir(data);
      });
  }

  onNoClick(): void {
    this.navSrv.navigate('nómina');
  }

  save() {}

  nav = (route: string) => this.navSrv.navigate(route);

  get f() {
    return this.form.controls;
  }

  changeState(): void {
    (this.state == "closed") ? this.state = "open" : this.state = "closed";
  }


}
