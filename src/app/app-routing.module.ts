import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent} from '../app/about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormComponent} from '../app/form/form.component'

const routes: Routes = [
  { path: 'form',component:FormComponent},
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: "/form", pathMatch: "full" },
  
  { path:'**', component:NotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
