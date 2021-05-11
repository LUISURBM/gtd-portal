import { Component, OnInit } from '@angular/core';
import { Anticipo, anticipos } from './anticipo-data';

@Component({
  selector: 'app-payroll-anticipo',
  templateUrl: './anticipo.component.html',
  styleUrls: ['./anticipo.component.css']
})
export class AnticipoComponent implements OnInit {

  anticipoData: Anticipo[];

  constructor() {

    this.anticipoData = anticipos;
  }


  ngOnInit(): void {
  }

}
