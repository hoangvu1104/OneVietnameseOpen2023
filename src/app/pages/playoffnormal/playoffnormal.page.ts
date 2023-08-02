import { Component, OnInit } from '@angular/core';
import { Division } from 'src/models/Division';
import { CommonFunctions } from 'src/shared/commonFunctions';
import { Fields } from 'src/shared/fields';

@Component({
  selector: 'app-playoffnormal',
  templateUrl: './playoffnormal.page.html',
  styleUrls: ['./playoffnormal.page.scss'],
})
export class PlayoffnormalPage implements OnInit {
  semifinals: Division[] = [];
  finals: Division[] = [];
  finalD1: Division[] = [];
  time1: string = '13h-14h';
  time2: string = '14h15-15h15';
  time3: string = '15h15-16h15';
  time4: string = '16h15-17h';
  displayLogo: boolean = false;
  message: string = 'Hiển thị logo';
  constructor(public commonFunctions: CommonFunctions) { 
    this.commonFunctions.enableMenuSwipe();
    this.initData();
  }

  ngOnInit() {
  }

  initData()
  {
     //get group A and B from page home
     this.semifinals = [
      // Semi Final
      {
        time: this.time1, field: Fields.Field1,
        teamA: 'RB Junior', teamB: 'Stechco1(*)',
        resultA: 1, resultB: 1
      },
      {
        time: this.time1, field: Fields.Field2,
        teamA: 'Stechco2', teamB: 'BFC(*)',
        resultA: 2, resultB: 2
      },
      {
        time: this.time1, field: Fields.Field3,
        teamA: 'U45FC', teamB: 'AS-VMU',
        resultA: 2, resultB: 7
      },
      {
        time: this.time1, field: Fields.Field4,
        teamA: 'VMU', teamB: '3 Mien FC',
        resultA: 0, resultB: 10
      }
    ];
    // Final
    this.finals= [      
      {
        time: this.time2, field: Fields.Field2,
        teamA: 'RB Junior', teamB: 'Stechco2',
        resultA: 4, resultB: 1
      },
      {
        time: this.time2, field: Fields.Field3,
        teamA: 'U45 FC', teamB: 'VMU',
        resultA: 6, resultB: 1
      },
      {
        time: this.time2, field: Fields.Field4,
        teamA: '3 Mien FC', teamB: 'AS-VMU',
        resultA: 2, resultB: 0
      }      
    ];
    this.finalD1 = [{
      time: this.time3, field: Fields.Field4,
      teamA: 'Stechco1', teamB: 'BFC(*)',
      resultA: 1, resultB: 1
    }];
  }

  changeDisplayImages()
  {
    if (this.displayLogo)
    {
      this.message = 'Logo';
    }
    else
    {
      this.message = 'Màu áo';
    }
    this.displayLogo = !this.displayLogo;    
  }
}
