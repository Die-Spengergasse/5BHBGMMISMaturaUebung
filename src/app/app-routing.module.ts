import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PractitionerFormComponent } from './practitioner-form/practitioner-form.component';

const routes: Routes = [
  {path: "practitioner/:id", component: PractitionerFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
