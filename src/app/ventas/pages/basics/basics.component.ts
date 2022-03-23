import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [`
    a{ color: white; }
  `]
})
export class BasicsComponent {

  urlDatePipe: string = "https://angular.io/api/common/DatePipe";
  
  nameLower: string = "FERNANDO";
  nameUpper: string = "fernando";
  nameComple: string = "ferNanDo heRrera";

  fecha: Date = new Date();
  constructor() { }


}
