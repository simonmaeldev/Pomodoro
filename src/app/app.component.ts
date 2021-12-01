import { Component, Renderer2, ViewChild } from '@angular/core';
import { AppWorkDirective } from './app-work.directive';
import { CountDownComponent } from './count-down/count-down.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pomodoro';
  @ViewChild(AppWorkDirective, {static: true}) timerWork!: AppWorkDirective;
  currentWorkIndex = 1;
  nbPauseBeforeBig = 3;
  currentNbPauses = 1;
  
  workTimers = [
    {
      name : "Travail",
      timer : 25*60,
      label : "work",
      isPause: false,
    },
    {
      name : "Pause",
      timer : 5*60,
      label : "work",
      isPause: true,
    },
    {
      name : "Grosse pause",
      timer : 15*60,
      label : "work",
      isPause: true,
    }
  ];

  ngOnInit() {
    this.loadWorkTimer();
  }

  getNextWorkTimer(current:number, currentNbPauses:number) {
    if(this.workTimers[current].isPause) {
      return 0;
    } else if (currentNbPauses % (this.nbPauseBeforeBig + 1) == 0) {
      return 2;
    } else {
      return 1;
    }
  }
  
  loadWorkTimer() {
    this.currentWorkIndex = this.getNextWorkTimer(this.currentWorkIndex, this.currentNbPauses); 
    const workTimer = this.workTimers[this.currentWorkIndex];
    if (workTimer.isPause) {
      this.currentNbPauses++;
    }
    const viewContainerRef = this.timerWork.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<CountDownComponent>(CountDownComponent);
    componentRef.instance.name = workTimer.name;
    componentRef.instance.timer = workTimer.timer;
    componentRef.instance.label = workTimer.label;
    componentRef.instance.newCountDownEvent.subscribe(val => this.sayFinish(val))

    this.changeBgColor(workTimer);
  }

  changeBgColor(workTimer:any) {
    if (workTimer.isPause) {
      this.renderer.removeClass(document.body, 'bg-blue');
      this.renderer.addClass(document.body, 'bg-green');
    } else {
      this.renderer.removeClass(document.body, 'bg-green');
      this.renderer.addClass(document.body, 'bg-blue');
    }
  }
  
  constructor(private renderer: Renderer2) {    
    this.renderer.addClass(document.body, 'bg-blue');
  }
  
  sayFinish(countDown:CountDownComponent) {
    this.sendNotification(countDown);
    if(countDown.label == 'work') {
      this.loadWorkTimer();
    }
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "../../assets/audio/notif.wav";
    audio.load();
    audio.play();
  }

  sendNotification(countDown:CountDownComponent) {
    this.playAudio();
    
  }
  
}
