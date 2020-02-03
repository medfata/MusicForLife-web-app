import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { restdata } from 'src/Model/RestDataRepo';
import { HttpClientModule } from '@angular/common/http';
import { ModelModule } from 'src/Model/model.module';

import { MainPage } from 'src/Core/MainPage.component';
import { sidepage } from 'src/Core/SidePage.component';
import { DataRepository } from 'src/Core/daarepository';
import { SHARED_OBJECT, SharedObject } from 'src/Core/charedObject';
import { Subject } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MainPage,
    sidepage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModelModule,
  ],
  providers:[DataRepository,{provide:SHARED_OBJECT, useValue:new Subject<SharedObject>()}],
  bootstrap: [AppComponent]
})
export class AppModule { }
