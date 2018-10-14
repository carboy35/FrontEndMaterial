import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { CdkTableModule, DataSource } from '@angular/cdk/table';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatOptionModule,
  MatTreeModule,
  MatTableModule
  
} from '@angular/material';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MenuListItemComponent} from './menu-list-item/menu-list-item.component';
import {AppRoutingModule} from './app-routing.module';
//import { FirstComponent } from './first/first.component';
//import { SecondComponent } from './second/second.component';
//import { ThirdComponent } from './third/third.component';
//import { FourthComponent } from './fourth/fourth.component';
import { NavService } from './nav.service';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FirstComponent } from './component/escenarioElectoral/first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CargaEscenarioElectoralComponent } from './component/escenarioElectoral/carga-escenario-electoral/carga-escenario-electoral.component';
import { EventoEleccionarioComponent } from './component/escenarioElectoral/evento-eleccionario/evento-eleccionario.component';
import { VerEscenarioElectoralComponent } from './component/escenarioElectoral/ver-escenario-electoral/ver-escenario-electoral.component';
import { PartidoComponent } from './component/mantenedores/partido/partido.component';
import { CandidatoComponent } from './component/mantenedores/candidato/candidato.component';
import { AdministradorElectoralComponent } from './component/mantenedores/administrador-electoral/administrador-electoral.component';
import { PostDialogComponent } from './component/post-dialog/post-dialog.component';

/**
 * NgModule that includes all Material modules that are required.
 */
@NgModule({
  imports:[
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,CommonModule,MatSelectModule, MatTreeModule,MatTableModule,MatInputModule
  ],
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule,
    
    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatOptionModule,MatTableModule,MatInputModule
  ],
  declarations: [PostDialogComponent],
  //declarations: [DashboardComponent, CargaEscenarioElectoralComponent, EventoEleccionarioComponent, VerEscenarioElectoralComponent, PartidoComponent, CandidatoComponent, AdministradorElectoralComponent]//,
 // declarations: [TopNavComponent, FirstComponent, SecondComponent, ThirdComponent, FourthComponent],//, MenuListItemComponent],
  //imports: [AppRoutingModule]
})
export class MaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
  //  FormsModule,
   // ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    
  ],
  declarations: [
    AppComponent,
    MenuListItemComponent,
    EventoEleccionarioComponent,
    CargaEscenarioElectoralComponent,
    VerEscenarioElectoralComponent,
    CandidatoComponent,
    AdministradorElectoralComponent,
    PartidoComponent,
    DashboardComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    TopNavComponent
  ],
  bootstrap: [AppComponent],
  providers: [NavService],
  entryComponents:[PostDialogComponent]
})
export class AppModule {}
