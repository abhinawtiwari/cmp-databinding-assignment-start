import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<number>();
  timerId;
  incrementingNumber: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    this.timerId = setInterval(() => {
      this.gameStarted.emit(this.incrementingNumber++);
    }, 1000);
  }

  onGamePause() {
    clearInterval(this.timerId);
  }

}
