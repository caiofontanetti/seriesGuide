import { GuardAdminService } from './services/guard-admin.service';
import { GuardService } from './services/guard.service';
import { DeniedComponent } from './auth/denied/denied.component';
import { ExAbertoComponent } from './auth/ex-aberto/ex-aberto.component';
import { ExLogadoComponent } from './auth/ex-logado/ex-logado.component';
import { ExAdminComponent } from './auth/ex-admin/ex-admin.component';
import { SeriesComponent } from './series/series.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent} from './routing/blank/blank.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'list', component: ListComponent},
  {path: 'login', component: LoginComponent},

{ path: 'admin/login', component: LoginComponent},
{ path: 'admin', component: BlankComponent},
{ path: 'auth/ex-logado', component: ExLogadoComponent, canActivate: [GuardService]},
{ path: 'auth/ex-admin', component: ExAdminComponent, canActivate: [GuardService, GuardAdminService]},
{ path: 'auth/ex-aberto', component: ExAbertoComponent},
{ path: 'auth/denied', component: DeniedComponent},
{ path: 'auth', component: BlankComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
