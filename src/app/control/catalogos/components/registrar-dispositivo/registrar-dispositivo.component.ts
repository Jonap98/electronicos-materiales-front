import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DispositivosService } from '../../services/dispositivos.service';
import { ModelosService } from '../../services/modelos.service';
import { Modelo } from '../../interfaces/modelo.interface';
import { AreasService } from '../../services/areas.service';
import { Area } from '../../interfaces/area.interface';
import { Dispositivo } from '../../interfaces/dispositivo.interface';

@Component({
  selector: 'registrar-dispositivo',
  templateUrl: './registrar-dispositivo.component.html',
  styleUrls: ['./registrar-dispositivo.component.css']
})
export class RegistrarDispositivoComponent implements OnInit {

  public dispositivoForm?: FormGroup;
  public fechaCompra: string = '';
  public garantiaInicio: string = '';
  public garantiaFin: string = '';

  @Input()
  public modelos?: Modelo[];
  @Input()
  public areas?: Area[];


  @Output()
  public onDevice = new EventEmitter();

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {

    this.dispositivoForm = this.fb.group({
      tipo: [''],
      marca: [''],
      modelo: ['', [ Validators.required ]],
      num_serie: ['', [ Validators.required ]],
      asset_name: ['', [ Validators.required ]],
      mac_address: ['', [ Validators.required ]],
      ip_address: ['', [ Validators.required ]],
      owner: ['', [ Validators.required ]],
      ubicacion: ['', [ Validators.required ]],
      proceso: ['', [ Validators.required ]],
      fecha_compra: ['', [ Validators.required ]],
      garantia_inicio: ['', [ Validators.required ]],
      garantia_fin: ['', [ Validators.required ]],
    });

  }

  isValidField( field: string ): boolean | null {
    return this.dispositivoForm!.controls[field].errors && this.dispositivoForm!.controls[field].touched;
  }

  getFieldError( field: string ): string | null {
    if( !this.dispositivoForm!.controls[field] ) return null;

    const errors = this.dispositivoForm!.controls[field].errors || {};

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
    const modelData = this.modelos!.filter((model) => model.modelo == this.dispositivoForm!.value.modelo);
    if( this.dispositivoForm!.value.fecha_compra != '' )
      this.fechaCompra = this.dispositivoForm?.value.fecha_compra.toLocaleDateString();
    if( this.dispositivoForm!.value.garantia_inicio != '' )
      this.garantiaInicio = this.dispositivoForm?.value.garantia_inicio.toLocaleDateString();
    if( this.dispositivoForm!.value.garantia_fin != '' )
      this.garantiaFin = this.dispositivoForm?.value.garantia_fin.toLocaleDateString();

    this.dispositivoForm!.value.fecha_compra = this.fechaCompra;
    this.dispositivoForm!.value.garantia_inicio = this.garantiaInicio;
    this.dispositivoForm!.value.garantia_fin = this.garantiaFin;

    if( modelData[0].tipo ) {
      this.dispositivoForm!.value.tipo = modelData[0].tipo ?? '';
      this.dispositivoForm!.value.marca = modelData[0].marca ?? '';
    }

    if( this.dispositivoForm?.invalid ) {
      this.dispositivoForm!.markAllAsTouched();

      return;
    }

    this.onDevice.emit( this.dispositivoForm!.value );

    this.dispositivoForm!.reset();
  }

}
