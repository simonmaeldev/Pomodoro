import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {

  @Output() newCountDownEvent = new EventEmitter<string>();
  @Input() timer:number = 5*60;
  @Input() name:string = "";
  timeLeft: number = 0;
  interval: any;
  
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
    this.newCountDownEvent.emit(this.name);
  }
  
  pauseTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    this.timeLeft = this.timer;
  }
}
