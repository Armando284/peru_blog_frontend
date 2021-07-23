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
import { WelcomeService } from './services/welcome.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    WelcomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
