import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listatareas',
  templateUrl: './listatareas.component.html',
  styleUrls: ['./listatareas.component.css']
})
export class ListatareasComponent {
  @Input() listas:String[] = [];

}
