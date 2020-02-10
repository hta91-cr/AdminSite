import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgwWowModule } from 'ngx-wow';

import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from '../menu/menu/menu.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { BodyComponent } from '../core/body/body.component';
import { LoginComponent } from '../core/login/login.component';
import { ProfileComponent } from '../core/profile/profile.component';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { RegisterComponent } from '../core/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BodyComponent,
    LoginComponent,
    ProfileComponent,
    NotFoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModulesPro.forRoot(),
    HttpClientModule,
    HttpClientJsonpModule,
    NgwWowModule
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
