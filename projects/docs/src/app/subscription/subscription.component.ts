import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import { AuthError } from 'msal';
import { ValuesCatalog } from '../srv/in-mem-data-service';
import { InMemService } from '../srv/in-mem-service';
import { VALUES_CATALOG } from '../values-catalog';
import { SubscriptionFormComponent } from './subscription-form.component';
const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

@Component({
  selector: 'app-subscription',
  templateUrl: 'subscription.component.html',
  styleUrls: ['subscription.component.css'],
})
export class SubscriptionComponent implements OnInit, AfterViewInit {
  profile: any;

  displayedColumns: string[] = ['id', 'name', 'code', 'fecha', 'action'];
  dataSource: MatTableDataSource<ValuesCatalog>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(
    private authService: MsalService,
    private http: HttpClient,
    private memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource<ValuesCatalog>(VALUES_CATALOG);
  }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.http.get(GRAPH_ENDPOINT).subscribe({
      next: (profile) => {
        this.profile = profile;
      },
      error: (err: AuthError) => {},
    });
  }

  add(name: ValuesCatalog): void {
    if (!name) {
      return;
    }
    this.dataSource.data = [
      ...this.dataSource.data,
      { ...name, id: this.memSrv.genId(this.dataSource.data, 'valuesCatalog') },
    ];
  }

  delete(hero: string): void {
    this.dataSource.data = this.dataSource.data.filter((h) => h.name !== hero);
    this._snackBar.open(`${hero}`, 'deleted!', { duration: 5000 });
  }

  edit(hero: ValuesCatalog): void {
    const editedData = this.dataSource.data.map((h) =>
      h.id !== hero.id ? h : hero
    );
    this.dataSource.data = editedData;
  }

  openDialog(id?: number): void {
    const editing = this.dataSource.data.filter((v) => v.id == id)?.[0];
    console.log(editing);
    const dialogRef = this.dialog.open(SubscriptionFormComponent, {
      width: '480px',
      data: editing ? editing : { id: undefined, name: '' },
      backdropClass: 'blur-overlay',
      panelClass: 'ne-dialog-panel',
      closeOnNavigation: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result?.id) this.edit(result);
      else this.add(result);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
