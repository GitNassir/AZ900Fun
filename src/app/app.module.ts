import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CloudComponent } from './features/components/cloud/cloud.component';
import {NavigationComponent} from "./shared/components/navigation/navigation.component";
import { QuizComponent } from './shared/components/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CloudComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
