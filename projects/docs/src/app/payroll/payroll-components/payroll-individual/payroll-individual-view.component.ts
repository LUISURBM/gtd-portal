import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Menu } from '../../../shared/menu-items/menu-items';
import { NavigationService } from '../../../srv/navigation.service';
import { ThemeService } from '../../../srv/theme.service';
import { MENU_ITEMS } from '../payroll-general/payroll-data';
import { environment } from '../../../../environments/environment';
import { HasElementRef } from '@angular/material/core/common-behaviors/color';

@Component({
  selector: 'app-payroll-individual-view',
  templateUrl: './payroll-individual-view.component.html',
})
export class PayrollindividualViewComponent implements OnInit{
  position = 'below';
  public menuItems: Menu[];
  private payrollDataUrl = environment.API_GATEWAY;

  form: FormGroup;
  constructor(
    public builder: FormBuilder,
    public router: Router,
    private route: ActivatedRoute,
    public themeSrv: ThemeService,
    private elRef:ElementRef
    , public navSrv: NavigationService
    ,public http: HttpClient
    ) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'content-Type': 'application/json'
        ,Authorization:'82e2f0e5-30b2-4e6b-a7ce-99fa407d3b68'
      }),
    };
    this.http
      .post<string>(
        this.payrollDataUrl + 'documents/payrolls/procedure',
        {"body":{"params": {
          "trabajadorId": "FF841F95-5FDC-4879-A6BD-EE8C93A82943"
        }},
      "header":{
        "cliente": "FF841F95-5FDC-4879-A6BD-EE8C93A82943",
        "esquema": "payroll",
        "procedimientoAlmacenado": "ConsultarDevengadosTest",
      }},
        httpOptions
      )
      .subscribe((data) => {
        console.dir(data);
        debugger

      });

    this.menuItems = MENU_ITEMS;

    this.form = this.builder.group({
      menuItem: builder.control(''),
    });

    this.route.queryParams.subscribe((params) => {
      const data1 = params['data'];
      this.form.patchValue(data1);
    });
    this.form.valueChanges.subscribe((filter) => {
      this.filter(filter?.menuItem);
    });
  }

  ngOnInit(){
    console.log('configured routes: ', this.router.config);
  }
  onNoClick(): void {}

  save() {}

  get f() {
    return this.form.controls;
  }

  filter(menuItemName: string) {
    this.menuItems = MENU_ITEMS;
    if (menuItemName) {
      this.menuItems = this.menuItems.filter((item) =>
        item.name
          ?.toLocaleLowerCase()
          .includes(menuItemName?.toLocaleLowerCase())
      );
    }
  }

  toggleFullScreen = () =>  this.themeSrv.toggleFullScreen(this.elRef.nativeElement);

  scrollToElement(el:ElementRef): void {

    // document?.getElementById(el)?.scrollTo({ behavior: "smooth", top: 0 });
    // this.router.navigate([], { fragment: el });
    el.nativeElement.scrollIntoView();
  }
}
