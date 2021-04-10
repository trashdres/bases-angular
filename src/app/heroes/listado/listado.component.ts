import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
	heroes: string[] = ['Spider-man', 'Ironman', 'Hulk', 'Ant-man', 'Iron Fist', 'Moon Knigth', 'Scarlet Witch', 'Beast'];
	heroeBorrado: string = "";

	borrarHeroe(){
		this.heroeBorrado = this.heroes.pop() || '';
	}

}