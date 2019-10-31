import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListEmployeeComponent } from './employee/list-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { browser } from 'protractor';
import { CreateModelBindingComponent } from './employee/create-model-binding.component';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import {EmployeeService} from './employee/employee.service';
import { DisplayemployeeComponent } from './employee/displayemployee.component';
import { EmployeeDetailComponent } from './employee/employee-detail.component';
import { EmployeeFilterPipe } from './employee/employee-filter.pipe';
import { EmployeeListResolverService } from './employee/employee-list-resolver.service';
import { AccordianComponent } from './shared/accordian.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    PageNotFoundComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    CreateModelBindingComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayemployeeComponent,
    EmployeeDetailComponent,
    EmployeeFilterPipe,
    AccordianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [EmployeeService, EmployeeListResolverService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
