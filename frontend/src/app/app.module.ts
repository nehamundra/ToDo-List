import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { LoginComponent } from './login/login.component';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule,
    CardModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    AccordionModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [HttpClient, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
