import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GerenciaComponent } from './components/gerencia/gerencia.component';
import { TransparenciaComponent } from './components/transparencia/transparencia.component';
import { ConvocatoriasComponent } from './components/convocatorias/convocatorias.component';
import { ServiciosPublicosComponent } from './components/servicios-publicos/servicios-publicos.component';
import { DistritoComponent } from './components/distrito/distrito.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { MunicipalidadComponent } from './components/municipalidad/municipalidad.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { CampaignComponent } from './components/campaign/campaign.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gerencia', component: GerenciaComponent },
  { path: 'transparencia', component: TransparenciaComponent },
  { path: 'convocatorias', component: ConvocatoriasComponent },
  { path: 'servicios-publicos', component: ServiciosPublicosComponent },
  { path: 'distrito', component: DistritoComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'municipalidad', component: MunicipalidadComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'campaign/:id', component: CampaignComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
