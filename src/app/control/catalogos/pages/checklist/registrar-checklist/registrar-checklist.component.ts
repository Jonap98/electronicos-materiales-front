import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChecklistService } from '../../../services/checklist.service';
import { DispositivosService } from '../../../services/dispositivos.service';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'registrar-checklist',
  templateUrl: './registrar-checklist.component.html',
  styleUrls: ['./registrar-checklist.component.css']
})
export class RegistrarChecklistComponent implements OnInit {

  public checklistForm?: FormGroup;
  public formGroup?: FormGroup;

  public assetNames: any[] = [];
  public filteredNames: string[] = [];

  @Output()
  public onChecklist = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private checklistService: ChecklistService,
    private dispositivosService: DispositivosService
  ) {}

  ngOnInit(): void {
    this.checklistForm = this.fb.group({
      asset_name: [ , Validators.required ],
      status_enciende: [ , Validators.required ],
      status_pantalla: [ , Validators.required ],
      status_partes_funcionamiento: [ , Validators.required ],
      status_partes_faltantes: [ , Validators.required ],
      status_general: [ , Validators.required ],
      descripcion_problema: [],
    });

    this.formGroup = new FormGroup({
      selectedCategory: new FormControl(),
      enciende: new FormControl(),
    });

    this.dispositivosService.getAssetNames().subscribe( resp => {
      this.assetNames = resp.data;
    });
  }

  filterNames(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.assetNames).length; i++) {
        let asset = (this.assetNames)[i];
        if (asset.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(asset);
        }
    }

    this.filteredNames = filtered;
}

  // yesNoOptions: any[] = [ 1, 0 ];
  yesNoOptions: any[] = [
    { name: 'Si', value: 1},
    { name: 'No', value: 0}
  ];

  public checklistData: any;
  onSubmit(): void {

    if( this.checklistForm!.invalid ) {
      this.checklistForm!.markAllAsTouched();

      return;
    }

    this.checklistData = {
      asset_name: this.checklistForm!.value.asset_name.name,
      status_enciende: this.checklistForm!.value.status_enciende,
      status_pantalla: this.checklistForm!.value.status_pantalla,
      status_partes_funcionamiento: this.checklistForm!.value.status_partes_funcionamiento,
      status_partes_faltantes: this.checklistForm!.value.status_partes_faltantes,
      status_general: this.checklistForm!.value.status_general,
      descripcion_problema: this.checklistForm!.value.descripcion_problema,
    }

    this.onChecklist.emit( this.checklistData )

    this.checklistForm!.reset();

    // this.checklistService.registrarChecklist(
    //   this.checklistForm!.value.asset_name,
    //   this.checklistForm!.value.status_enciende,
    //   this.checklistForm!.value.status_pantalla,
    //   this.checklistForm!.value.status_partes_funcionamiento,
    //   this.checklistForm!.value.status_partes_faltantes,
    //   this.checklistForm!.value.status_general,
    //   this.checklistForm!.value.descripcion_problema,
    // ).subscribe( resp => {
    //   if( resp.data ) {

    //   }
    // });
  }

}
