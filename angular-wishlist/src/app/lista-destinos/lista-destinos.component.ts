import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';
import {DestinosApiClient} from '../models/destinos-api-client.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;

  
  constructor(public destinosApiClient:DestinosApiClient) {
    this.onItemAdded = new EventEmitter();
  }

  ngOnInit(){
  };

  agregado(d: DestinoViaje) {
    this.destinosApiClient.add(d);    
  };

  elegido(e: DestinoViaje) {
    this.destinosApiClient.elegir(e);
  };

}


// elegido(d: DestinoViaje) {
//   this.destinos.forEach(function (x) {x.setSelected(false); });
//   d.setSelected(true);
// }