import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onGameStarted(incrementingNumber: number) {
    if(incrementingNumber % 2 == 0) {
      this.evenNumbers.push(incrementingNumber);
    }else{
      this.oddNumbers.push(incrementingNumber);
    }
  }

}
