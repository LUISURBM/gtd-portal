import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in-dialog',
  template: `<h1 mat-dialog-title>Hi {{data.name}}</h1>
  <form [formGroup]="form">

    <div mat-dialog-content>
      <p>What's your email?</p>
      <mat-form-field>
        <input matInput tabindex="1" [(ngModel)]="data.email"
            formControlName="email"
            id="email"
            type="text"
            class="form-control">
        <div *ngIf="f.email.touched && f.email.invalid" class="alert alert-danger">
            <div *ngIf="f.email.errors?.required">email is required.</div>
            <div *ngIf="f.email.errors?.email">Please, enter valid email address.</div>
        </div>
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="data.email" tabindex="2">Ok</button>
      <button mat-button (click)="onNoClick()" tabindex="-1">No Thanks</button>
    </div>
  </form>
  `
})
export class SignInComponent {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(
    public dialogRef: MatDialogRef<SignInComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }



  get f(){
    return this.form.controls;
  }

}
