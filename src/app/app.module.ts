import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { QuestionComponent } from './question/question.component';
import { SingleQuestionComponent } from './question/single-question/single-question.component'
import { MatGridListModule } from '@angular/material/grid-list';
import { SeatsComponent } from './seats/seats.component';
import { InsertImageComponent } from './insert-image/insert-image.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes:Routes = [
  {path: 'question', component:QuestionComponent},
  {path: 'cinema', component:SeatsComponent},
  {path: 'images/insert', component:InsertImageComponent}
];
  

const material = [
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MatSliderModule,
  RouterModule.forRoot(routes),
  MatGridListModule
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    SingleQuestionComponent,
    SeatsComponent,
    InsertImageComponent,
  ],
  imports: [material, HttpClientModule],
  exports: [material],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
