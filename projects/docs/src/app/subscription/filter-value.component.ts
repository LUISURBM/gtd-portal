import { Component, Inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { InMemService } from "../srv/in-mem-service";

@Component({
  selector: "app-filter-value-dialog",
  template: `<h1 mat-dialog-title>Hi {{ data.name }}</h1>
    <form [formGroup]="form">
      <div mat-dialog-content>
        <p>What's your info?</p>
        <div class="type-tooltip-ne" matTooltip="Tooltip!" *ngIf="inMemSrv.empresas | async as businesses">
          <span>Show business</span>
          <mat-form-field>
				    <mat-select class="example-select"
            #business
              tabindex="1"
              formControlName="business"
              id="business">
                <mat-option *ngFor="let bus of businesses" [value]="bus">
                  {{bus.name}}
                </mat-option>
            </mat-select>
          </mat-form-field>
        </div>
        <mat-form-field>
          <input
            matInput
            tabindex="1"
            formControlName="name"
            id="name"
            type="text"
            class="form-control"
          />
          <div
            *ngIf="f.name.touched && f.name.invalid"
            class="alert alert-danger"
          >
            <div *ngIf="f.name.errors?.required">name is required.</div>
          </div>
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            tabindex="1"
            formControlName="code"
            id="code"
            type="text"
            class="form-control"
          />
          <div
            *ngIf="f.code.touched && f.code.invalid"
            class="alert alert-danger"
          >
            <div *ngIf="f.code.errors?.required">code is required.</div>
          </div>
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            tabindex="1"
            formControlName="catalog"
            id="catalog"
            type="text"
            class="form-control"
          />
          <div
            *ngIf="f.catalog.touched && f.catalog.invalid"
            class="alert alert-danger"
          >
            <div *ngIf="f.catalog.errors?.required">catalog is required.</div>
          </div>
        </mat-form-field>
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Date</mat-label>
          <input matInput [matDatepicker]="picker" formControlName="fecha" />
          <mat-datepicker-toggle
            matSuffix
            [for]="picker"
          ></mat-datepicker-toggle>
          <mat-datepicker touchUi #picker></mat-datepicker>
        </mat-form-field>
        <input
          matInput
          tabindex="1"
          formControlName="id"
          id="id"
          type="text"
          hidden
          class="form-control"
        />
      </div>
      <div mat-dialog-actions>
        <button mat-button (click)="save()" tabindex="3">Ok</button>
        <button mat-button (click)="onNoClick()" tabindex="-1">
          No Thanks
        </button>
      </div>
    </form> `,
})
export class FilterValueComponent {
  position = 'below';
  form = new FormGroup({
    id: new FormControl(undefined),
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.nullValidator]),
    code: new FormControl("", [Validators.required, Validators.nullValidator]),
    catalog: new FormControl("", [Validators.required, Validators.nullValidator]),
    business: this.builder.control({}),
    fecha: new FormControl(new Date(), [
      Validators.required,
      Validators.nullValidator,
    ]),
  });

  constructor(
    public dialogRef: MatDialogRef<FilterValueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public inMemSrv: InMemService,
    public builder: FormBuilder
  ) {
    this.form.patchValue(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  get f() {
    return this.form.controls;
  }
}
