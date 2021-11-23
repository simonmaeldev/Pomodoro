import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pomodoro';

  timers = [
    {
      name : "Travail",
      timer : 25
    },
    {
      name : "Pause",
      timer : 5
    },
    {
      name : "Grosse pause",
      timer : 15
    }
  ];

  sayFinish(countDown:string) {
    console.log(countDown);
  }
  
}
