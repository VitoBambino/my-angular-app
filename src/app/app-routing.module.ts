import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { FormularzeComponent } from './formularze/formularze.component';
import { HomeComponent } from './home/home.component';
import { OfferComponent } from './offer/offer.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: FormularzeComponent},
  {path: 'offer', component: OfferComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'contact', component: ContactComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, FormularzeComponent, OfferComponent]
