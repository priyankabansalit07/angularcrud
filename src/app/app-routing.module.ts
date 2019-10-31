import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListEmployeeComponent } from './employee/list-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { CreateModelBindingComponent } from './employee/create-model-binding.component';
import { CreateEmployeeCanDeactivateService } from './employee/create-employee-can-deactivate.service';
import { EmployeeDetailComponent } from './employee/employee-detail.component';
import { CreateEmployeeCanDeactivate2Service } from './employee/create-employee-can-deactivate2.service';
import { EmployeeListResolverService } from './employee/employee-list-resolver.service';
import { EmployeeDetailsGuardService } from './employee/employee-details-guard.service';

const approute: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: 'lstEmployees', component: ListEmployeeComponent, resolve:{employeelist : EmployeeListResolverService} },
  { path: 'employee/:id', component: EmployeeDetailComponent , canActivate:[EmployeeDetailsGuardService]},
  { path: 'edit/:id', component: CreateModelBindingComponent, canDeactivate: [CreateEmployeeCanDeactivate2Service] },
  { path: 'create', component: CreateEmployeeComponent, canDeactivate: [CreateEmployeeCanDeactivateService] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(approute)], //, {enableTracing: true}
  exports: [RouterModule]
})
export class AppRoutingModule { }
