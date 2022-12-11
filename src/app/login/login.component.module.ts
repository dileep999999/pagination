import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [RouterModule.forChild(routes),  
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule
  ]
})
export class LoginModule { }
