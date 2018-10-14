


import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


//import {FirstComponent} from './component/escenarioElectoral/evento-eleccionario/evento-eleccionario.component';
import {SecondComponent} from './second/second.component';
import {ThirdComponent} from './third/third.component';
import {FourthComponent} from './fourth/fourth.component';

import { EventoEleccionarioComponent } from './component/escenarioElectoral/evento-eleccionario/evento-eleccionario.component';
import { CargaEscenarioElectoralComponent } from './component/escenarioElectoral/carga-escenario-electoral/carga-escenario-electoral.component';
import { VerEscenarioElectoralComponent } from './component/escenarioElectoral/ver-escenario-electoral/ver-escenario-electoral.component';
import { CandidatoComponent } from './component/mantenedores/candidato/candidato.component';
import { AdministradorElectoralComponent } from './component/mantenedores/administrador-electoral/administrador-electoral.component';
import { PartidoComponent } from './component/mantenedores/partido/partido.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';



const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  {path: 'eventoEleccionario', component: EventoEleccionarioComponent}, 
  {path: 'cargaEscenario', component: CargaEscenarioElectoralComponent},
  {path: 'verEscenario', component: VerEscenarioElectoralComponent},
  {path: 'candidato', component: CandidatoComponent},
  {path: 'administradorElectoral', component: AdministradorElectoralComponent},
  {path: 'partido', component: PartidoComponent},
  //{path: 'material-design', component: FirstComponent},
  {path: 'what-up-web', component: SecondComponent},
  {path: 'my-ally-cli', component: ThirdComponent},
  {path: 'become-angular-tailer', component: FourthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
