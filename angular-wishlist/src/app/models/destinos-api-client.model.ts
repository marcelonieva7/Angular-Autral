import { DestinoViaje } from './destino-viaje.model';

export class DestinosApiClient {
	destinos:DestinoViaje[];
	
	constructor() {
       this.destinos = [];
	}
	add(d:DestinoViaje){
	  this.destinos.push(d);
	}
	getAll(): DestinoViaje[]{
	  return this.destinos;
	}
	
	elegir(e: DestinoViaje){
		this.destinos.forEach(x => x.setSelected(false));
		e.setSelected(true);
		
	}
} 