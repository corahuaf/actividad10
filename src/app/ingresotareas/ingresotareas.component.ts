import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingresotareas',
  templateUrl: './ingresotareas.component.html',
  styleUrls: ['./ingresotareas.component.css']
})
export class IngresotareasComponent {
  formulario: FormGroup = this.fb.group({
    name: [['', Validators.required]],
    description: ['',[Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  tarea!: String;
  lista:String[]= [];

  submitForm() {
    this.lista.push(this.tarea);
    console.log(this.lista)
  }

  
}
