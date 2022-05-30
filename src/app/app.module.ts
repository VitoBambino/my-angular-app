import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularzeComponent } from './formularze/formularze.component';
import { HomeComponent } from './home/home.component';
import { OfferComponent } from './offer/offer.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';




@NgModule({
declarations: [
AppComponent,
FormularzeComponent,
HomeComponent,
routingComponents,
OfferComponent,
FaqComponent,
ContactComponent,

],
imports: [
BrowserModule,
FormsModule,
AppRoutingModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
