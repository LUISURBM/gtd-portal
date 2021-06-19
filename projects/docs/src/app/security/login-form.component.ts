import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InMemService } from '../srv/in-mem-service';
import { NavigationService } from '../srv/navigation.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LogInFormComponent {
  @ViewChild('formView') formView: any;
  position = 'below';
  form = new FormGroup({
    nombreUsuario: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', [Validators.required]),
  });

  step = 0;

  constructor(
    public inMemSrv: InMemService,
    public builder: FormBuilder,
    public navSrv: NavigationService
  ) {}

  onNoClick(): void {
    this.form.reset();
  }

  save() {
    this.navSrv.navigate('/nómina', this.form.value);
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  get f() {
    return this.form.controls;
  }
}
