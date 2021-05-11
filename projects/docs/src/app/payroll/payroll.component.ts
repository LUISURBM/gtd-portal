import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InMemService } from '../srv/in-mem-service';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss'],
})
export class PayrollComponent implements AfterViewInit {
  constructor(public formBuilder: FormBuilder, public inMemSrv: InMemService) {}
  ngAfterViewInit() {}

}
