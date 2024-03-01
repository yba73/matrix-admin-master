import { AuthAdminComponent } from './../layouts/auth-admin/auth-admin.component';
import { WidgetsComponent } from './../layouts/views/admin/widgets/widgets.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';

const routes: Routes = [{
  path: '',
  component: AdminLayoutComponent,

  children: [
    {
      path: '',
      redirectTo :"dashboard", pathMatch : "full"
    },
    {
      path: 'dashboard',
      loadChildren: () =>
        import('../layouts/views/admin/dashboard/dashboard.module').then(
          (m) => m.DashboardModule
        ),
    },
    {
      path: 'charts',
      loadChildren: () =>
        import('../layouts/views/admin/charts/charts.module').then(
          (m) => m.ChartsModule
        ),
    },
    {
      path: 'widgets',
      loadChildren: () =>
        import('../layouts/views/admin/widgets/widgets.module').then(
          (m) => m.WidgetsModule
        ),
    },
    {
      path: 'tables',
      loadChildren: () =>
        import('../layouts/views/admin/tables/tables.module').then(
          (m) => m.TablesModule
        ),
    },
    {
      path: 'full-width',
      loadChildren: () =>
        import('../layouts/views/admin/full-width/full-width.module').then(
          (m) => m.FullWidthModule
        ),
    },
    {
      path: 'form-basic',
      loadChildren: () =>
        import('../layouts/views/admin/form-basic/form-basic.module').then(
          (m) => m.FormBasicModule
        ),
    },
    {
      path: 'form-wizard',
      loadChildren: () =>
        import('../layouts/views/admin/form-wizard/form-wizard.module').then(
          (m) => m.FormWizardModule
        ),
    },
  ]},
  {path : 'auth',component : AuthAdminComponent,children:[{
    path: 'login',
    loadChildren: () =>
      import('../layouts/views/admin/login/login.module').then(
        (m) => m.LoginModule
      ),
  },{path : "register",loadChildren: () =>
  import('../layouts/views/admin/register/register.module').then(
    (m) => m.RegisterModule
  ),}]},

  { path: '**', redirectTo: '' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
