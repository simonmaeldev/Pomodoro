import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {faUndo, faPlay, faPause, faForward} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {

  // time management here is in seconds
  @Output() newCountDownEvent = new EventEmitter<CountDownComponent>();
  @Input() timer:number = 5*60;
  @Input() name:string = "";
  timeLeft: number = 0;
  interval: any;
  @Input() label:string = "";
  isStarted:boolean = false;

  //font awesome
  faUndo = faUndo;
  faPlay = faPlay;
  faPause = faPause;
  faForward = faForward;
  
  constructor() { }

  ngOnInit(): void {
    this.timeLeft = this.timer; 
  }

  startTimer():void {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
	this.sendFinish();
        this.resetTimer();
	this.pauseTimer();
      }
    },1000)
  }

  sendFinish() {
    this.newCountDownEvent.emit(this);
  }
  
  pauseTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    this.timeLeft = this.timer;
  }

  startOrPauseTimer() {
    this.isStarted = !this.isStarted;
    this.isStarted ? this.startTimer() : this.pauseTimer();
  }

  nextTimer() {
    this.sendFinish();
  }

}
