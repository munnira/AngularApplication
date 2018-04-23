import { BrowserModule } from '@angular/platform-browser';
//Collection of components,directives,services,pipes
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContatComponent } from './components/contat/contat.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
    imports:[
        BrowserModule
    ],

    declarations:[
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ContatComponent,
        ContactComponent,
        AboutComponent
    ],

    bootstrap: [AppComponent] 


})

export class AppModule{

}