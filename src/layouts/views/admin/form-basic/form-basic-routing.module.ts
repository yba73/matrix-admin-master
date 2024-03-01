import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBasicComponent } from './form-basic.component';

const routes: Routes = [{ path: '', component: FormBasicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBasicRoutingModule { }
