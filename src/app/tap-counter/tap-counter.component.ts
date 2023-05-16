import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tap-counter',
  templateUrl: './tap-counter.component.html',
  styleUrls: ['./tap-counter.component.css']
})
export class TapCounterComponent implements OnInit {
  tapCount : number = 0;

  handleClick(){
    this.tapCount += 1;
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

}
