import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { InMemService } from '../srv/in-mem-service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './trabajador.component.html',
	styleUrls: ['./trabajador.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  form: FormGroup;
  constructor(public formBuilder: FormBuilder,
    public inMemSrv: InMemService,
    public http: HttpClient
    ){
    this.form = new FormGroup({
      nombre: new FormControl(''),
      cedula: new FormControl('')
    });
  }
	ngAfterViewInit() { }

  save(){
    this.http.get('/api/valuesCatalogList',{}).subscribe(
      p => {
        console.log(p);
      }
    );
  }
  onNoClick(){}

  get f () {
    return this.form.controls;
  }

}
