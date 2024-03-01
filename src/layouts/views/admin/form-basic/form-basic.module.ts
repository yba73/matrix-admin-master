import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBasicRoutingModule } from './form-basic-routing.module';
import { FormBasicComponent } from './form-basic.component';

@NgModule({
  declarations: [FormBasicComponent],
  imports: [CommonModule, FormBasicRoutingModule],
})
export class FormBasicModule {}
