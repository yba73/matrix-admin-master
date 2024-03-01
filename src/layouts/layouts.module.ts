import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthAdminComponent } from './auth-admin/auth-admin.component';

@NgModule({
  declarations: [AdminLayoutComponent, AuthAdminComponent],
  imports: [CommonModule, RouterModule],
})
export class LayoutsModule {}
