import { CalculadoraService } from './services/calculadora.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora/calculadora.component';




@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CalculadoraComponent
  ],
  providers: [
    CalculadoraService
  ]

})
export class CalculadoraModule { }
