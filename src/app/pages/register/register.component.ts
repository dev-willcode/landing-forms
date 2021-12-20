import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form: FormGroup;
  emailRegex: RegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

  estadoCivilOptions = [
    { value: 'S', description: 'SOLTERO' },
    { value: 'C', description: 'CASADO' },
    { value: 'D', description: 'DIVOCIADO' },
    { value: 'U', description: 'UNION LIBRE' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.createForm();
    this.setDefaultValues();
  }

  clearData() {
    this.form.reset();
    this.setDefaultValues();
  }

  setDefaultValues() {
    const sexoControl = this.getField('sexo');
    sexoControl.setValue('M');
  }

  createForm() {
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, Validators.minLength(5)]],
      estado_civil: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      direccion: this.fb.group({
        principal: ['', Validators.required],
        referencia: ['', Validators.required],
      }),
    });
  }

  saveForm() {
    if (this.form.invalid) {
      this.setErrorFlag(Object.values(this.form.controls));
      return;
    }

    console.log('guardado', this.form.value);
    this.form.reset({ sexo: 'M' });
  }

  setErrorFlag(controls: AbstractControl[]) {
    for (const control of controls) {
      if (control instanceof FormGroup) {
        this.setErrorFlag(Object.values(control.controls));
      } else control.markAsTouched();
    }
  }

  // getters de estado invalido
  nameInvalid() {
    return this.getInvalidField('nombre');
  }
  lastnameInvalid() {
    return this.getInvalidField('apellido');
  }
  estadoCivilInvalid() {
    return this.getInvalidField('estado_civil');
  }
  emailInvalid() {
    return this.getInvalidField('email');
  }
  contrasenaInvalid() {
    return this.getInvalidField('contrasena');
  }
  principalInvalid() {
    return this.getInvalidField('direccion.principal');
  }
  referenciaInvalid() {
    return this.getInvalidField('direccion.referencia');
  }

  private getInvalidField(field: string) {
    const control = this.getField(field);
    return control.invalid && control.touched;
  }
  private getField(field: string) {
    const control = this.form.get(field);
    if (!control) throw new Error('El control no existe o no esta cargado.');
    return control;
  }
}
