import { Component } from "@angular/core";


@Component({
	selector: 'app-heroe',
	templateUrl: 'heroe.component.html'
})
export class HeroeCompoment {
	
	nombre: string = 'Spider-man';
	edad: number = 17;

	get nombreCapitalizado(): string {
		return this.nombre.toUpperCase();
	}
	
	obtenerNomber():string{
		return `${ this.nombre } - ${ this.edad }`;
	}

	cambiarNombre(): void{
		this.nombre = 'Iron Fist';
	}
	
	cambiarEdad(): void{
		this.edad = 35;
	}
}