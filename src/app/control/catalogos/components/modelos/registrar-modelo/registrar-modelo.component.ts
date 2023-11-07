import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'registrar-modelo',
  templateUrl: './registrar-modelo.component.html',
  styleUrls: ['./registrar-modelo.component.css']
})
export class RegistrarModeloComponent implements OnInit{
  public modeloForm?: FormGroup;

  @Output()
  public onModelo = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.modeloForm = this.fb.group({
      tipo: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', [ Validators.required ]],
    });
  }

  isValidField( field: string ): boolean | null {
    return this.modeloForm!.controls[field].errors && this.modeloForm!.controls[field].touched;
  }

  getFieldError( field: string ): string | null {
    if( !this.modeloForm!.controls[field] ) return null;

    const errors = this.modeloForm!.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch( key ) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Debe ingresar al menos ${ errors['minlength'].requiredLength } caracteres`;
      }
    }

    return null;
  }

  onSubmit(): void {
    if( this.modeloForm!.invalid ) {
      this.modeloForm?.markAllAsTouched();

      return;
    }

    this.onModelo.emit( this.modeloForm!.value );

    this.modeloForm!.reset();
  }
}
