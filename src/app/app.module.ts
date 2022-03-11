import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './hello.component';
import { ListComponent } from './hello.component';
import { ListDetailsComponent } from './hello.component';
import { RouterComponent } from '@angular/router';

@NgModule({
 imports:   {
   BrowserModule,
   FormsModule,
   RouterModule.forRoot([
     {Path: '',component: HomeComponent},
     {path: '/list',component: ListComponent},
     {path:'list/:index', component: }
   ])
 }
})
export class AppModule { }
