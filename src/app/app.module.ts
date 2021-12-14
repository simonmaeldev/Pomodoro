import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountDownComponent } from './count-down/count-down.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppWorkDirective } from './app-work.directive';
import { AppPosDirective } from './app-pos.directive';

import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    AppWorkDirective,
    AppPosDirective,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    TimepickerModule.forRoot(),
    PopoverModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
