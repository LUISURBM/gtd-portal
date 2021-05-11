import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from "@angular/material/table";
import { MatSnackBar } from "@angular/material/snack-bar";
import { InMemService } from '../srv/in-mem-service';
import { VALUES_WORKER } from "../values-catalog";
import { MatDialog } from "@angular/material/dialog";
import { ValuesCatalog } from "../srv/in-mem-data-service";
import { FilterValueComponent } from "./filter.componet";


@Component({
	selector: 'app-trabajador',
	templateUrl: './trabajador.component.html',
	styleUrls: ['./trabajador.component.scss']
})
export class TrabajadorComponent implements AfterViewInit {

  dataSource: MatTableDataSource<ValuesCatalog>;
 
  displayedColumns: string[] = ["id", "numeroDocumento", "codigoTrabajador", "primerNombre", "otrosNombres", "primerApellido", "segundoApellido", "action"];
  panelOpenState = false;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  form: FormGroup;


  constructor(public formBuilder: FormBuilder,
    public dialog: MatDialog,
    public inMemSrv: InMemService,
    private memSrv: InMemService,
    public http: HttpClient,
    private _snackBar: MatSnackBar
    ){
      this.dataSource = new MatTableDataSource<ValuesCatalog>(VALUES_WORKER);
    this.form = new FormGroup({

      id: new FormControl(),
     
      tipoDocumento: new FormControl(''),
      numeroDocumento:  new FormControl(Number),
      primerNombre:  new FormControl(''),
      otrosNombres:  new FormControl(''),
      primerApellido: new FormControl(''),
      segundoApellido:  new FormControl(''),  

      lugarTrabajoDepartamentoEstado:  new FormControl(),
      lugarTrabajoDireccion: new FormControl(''),
      lugarTrabajoMunicipioCiudad: new FormControl(),
      lugarTrabajoPais:  new FormControl(),
      
      altoRiesgoPension: new FormControl(Boolean),
      codigoTrabajador: new FormControl(Number),      
      salarioIntegral:  new FormControl(),      
      subTipoTrabajador:  new FormControl(),
      sueldo:  new FormControl(),
      tipoContrato:  new FormControl(),  
      tipoTrabajador:  new FormControl()
    });
  }
	ngAfterViewInit() { }

  openDialog(id?: number): void {
    const editing = this.dataSource.data.filter((v) => v.id == id)?.[0];
    console.log(editing);
    const dialogRef = this.dialog.open(FilterValueComponent, {
      width: "250px",
      data: editing ? editing : { id: undefined, name: "" },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result?.id) this.edit(result);
      else this.add(result);
    });
  }

  add(name: ValuesCatalog): void {
    if (!name) {
      return;
    }
    this.dataSource.data = [
      ...this.dataSource.data,
      { ...name, id: this.memSrv.genId(this.dataSource.data, "valuesCatalog") },
    ];
  }

  edit(hero: ValuesCatalog): void {
    const editedData = this.dataSource.data.map((h) =>
      h.id !== hero.id ? h : hero
    );
    this.dataSource.data = editedData;
  }

  delete(hero: string): void {
    this.dataSource.data = this.dataSource.data.filter((h) => h.name !== hero);
    this._snackBar.open(`${hero}`, "deleted!", { duration: 2000 });
  }

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
