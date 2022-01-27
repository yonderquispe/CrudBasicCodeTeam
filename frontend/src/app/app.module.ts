import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './COMPONETES/inicio/inicio.component';
import { EditarComponent } from './COMPONETES/editar/editar.component';
import { AgregarComponent } from './COMPONETES/agregar/agregar.component';
import { NavbarComponent } from './COMPONETES/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EditarComponent,
    AgregarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
