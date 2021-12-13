import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountDownComponent } from './count-down/count-down.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppWorkDirective } from './app-work.directive';
import { AppPosDirective } from './app-pos.directive';

@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    AppWorkDirective,
    AppPosDirective,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
