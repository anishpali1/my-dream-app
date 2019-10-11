import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Server2Component } from './server2/server2.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
import { DataTablesModule } from 'angular-datatables';  

import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';


const appRoutes: Routes = [
  { path: 'asd', component: Server2Component }
  
];

@NgModule({
  declarations: [
    AppComponent,
    Server2Component,
    AddStudentComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    DataTablesModule,  

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
