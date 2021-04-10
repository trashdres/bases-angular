import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeCompoment } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
	declarations: [
		HeroeCompoment,
		ListadoComponent
	],
	exports: [
		ListadoComponent
	],
	imports: [
		CommonModule
	]

})
export class HeroesModule {

}