import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// esto es para el manejo de formularios, angular no siempre lo importa automatico
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// importar componentes
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


//importaciones personalizadas
// servicios
import { CampaignService } from './services/campaign.service';
import { GerenciaComponent } from './components/gerencia/gerencia.component';
import { TransparenciaComponent } from './components/transparencia/transparencia.component';
import { ConvocatoriasComponent } from './components/convocatorias/convocatorias.component';
import { ServiciosPublicosComponent } from './components/servicios-publicos/servicios-publicos.component';
import { DistritoComponent } from './components/distrito/distrito.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { MunicipalidadComponent } from './components/municipalidad/municipalidad.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    GerenciaComponent,
    TransparenciaComponent,
    ConvocatoriasComponent,
    ServiciosPublicosComponent,
    DistritoComponent,
    NoticiasComponent,
    MunicipalidadComponent,
    QuienesSomosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CampaignService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
