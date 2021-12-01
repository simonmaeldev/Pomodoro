import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountDownComponent } from './count-down/count-down.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppWorkDirective } from './app-work.directive';

@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    AppWorkDirective,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
