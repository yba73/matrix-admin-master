import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullWidthRoutingModule } from './full-width-routing.module';
import { FullWidthComponent } from './full-width.component';

@NgModule({
  declarations: [FullWidthComponent],
  imports: [CommonModule, FullWidthRoutingModule],
})
export class FullWidthModule {}
