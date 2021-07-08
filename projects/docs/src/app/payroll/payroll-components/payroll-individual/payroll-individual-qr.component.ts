import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { animationsForm } from '../../../animations/form-animation';
import { NavigationService } from '../../../srv/navigation.service';
@Component({
  selector: 'app-payroll-individual-qr-dialog',
  templateUrl: './payroll-individual-qr.component.html',
  styles: [
    `
      .qr-code {
        color: black;
        background: white;
        max-width: 227px;
      }
    `,
  ],
  animations: animationsForm,
})
export class PayrollIndividualQrComponent {
  position = 'below';
  state = 'open';

  @Input() form?: string;

  constructor(
    public dialogRef: MatDialogRef<PayrollIndividualQrComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public builder: FormBuilder,
    public navSrv: NavigationService,
    public http: HttpClient,
    public dialog: MatDialog
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
