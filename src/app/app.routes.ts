import { Routes } from '@angular/router';
import { BlankComponent } from './layout/blank/blank.component';
import { ContactComponent } from './layout/contact/contact.component';

export const routes: Routes = [
  { path: '', component: BlankComponent, title: 'Taiba Connect | Digital Services in Saudi Arabia' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
