import { Routes } from '@angular/router';
import { BlankComponent } from './layout/blank/blank.component';
import { ContactComponent } from './layout/contact/contact.component';

export const routes: Routes = [
  {path:'', redirectTo:'taiba-connect', pathMatch:'full'},
  {path:'taiba-connect', component:BlankComponent, title:'taiba connect'},
  {path:'contact', component:ContactComponent, title:'Contact Us'},
];
