import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {VERSION} from '@angular/material';
import {NavItem} from './nav-item';
import {NavService} from './nav.service';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  version = VERSION;
  navItems: NavItem[] = [
    {
      displayName: 'Inicio',
      iconName: 'recent_actors',
      route: 'dashboard'
    },
    {
      displayName: 'Escenario Electoral',
      iconName: 'recent_actors',
      children: [
        {
          displayName: 'Evento Eleccionario',
          iconName: 'group',
          route: 'eventoEleccionario'
        },
        {
          displayName: 'Carga Escenario Electoral',
          iconName: 'speaker_notes',
          route: 'cargaEscenario'
        },
        {
          displayName: 'Ver Escenario Electoral',
          iconName: 'feedback',
          route: 'verEscenario'
        }
      ]
    },
    {
      displayName: 'Mantenedores',
      iconName: 'videocam',
      children: [
        {
          displayName: 'Candidato',
              iconName: 'person',
              route: 'candidato'
        },
        {
          displayName: 'Administrador Electoral',
          iconName: 'person',
          route: 'administradorElectoral',
        },
        {
          displayName: 'Partido',
          iconName: 'person',
          route: 'partido',
        }        
      ]
    }
   
  ];

  constructor(private navService: NavService) {
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
