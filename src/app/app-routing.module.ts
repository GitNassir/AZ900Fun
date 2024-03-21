import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CloudComponent} from "./features/components/cloud/cloud.component";

const routes: Routes = [
  { path: 'cloud', component: CloudComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
