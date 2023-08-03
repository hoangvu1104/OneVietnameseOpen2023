import { Component, OnInit } from '@angular/core';
import { TeamResult } from 'src/models/TeamResult';
import { CommonFunctions } from 'src/shared/commonFunctions';
import { Teams } from 'src/shared/teams';

@Component({
  selector: 'app-table-result',
  templateUrl: './table-result.page.html',
  styleUrls: ['./table-result.page.scss'],
})
export class TableResultPage implements OnInit {
  teamResultGroupA: TeamResult[] = [];
  teamResultGroupB: TeamResult[] = [];
  displayLogo: boolean = false;
  message: string = 'Hiển thị logo';
  constructor(public commonFunctions: CommonFunctions) { }

  changeDisplayImages() {
    this.displayLogo = !this.displayLogo;
    if (this.displayLogo) {
      this.message = 'Hiển thị logo';
    }
    else {
      this.message = 'Hiển thị màu áo';
    }
  }

  ngOnInit() {
    this.teamResultGroupA = [
      {
        teamName: Teams.VinabisFC,
        point: 0,
        won: 0,
        lost: 3,
        draw: 0,
        goalsFor: 2,//0+1+1
        goalsAgainst: 27,//9+7+11
        yellowCards: 0,
        redCards: 0
      },
      {
        teamName: Teams.Stechco,
        point: 7,
        won: 2,
        lost: 0,
        draw: 1,
        goalsFor: 14,//9+1+4
        goalsAgainst: 2,//0+1+1
        yellowCards: 0,//0+1
        redCards: 0
      },
      {
        teamName: Teams.BFC1,
        point: 3,
        won: 1,
        lost: 2,
        draw: 0,
        goalsFor: 8,//0+7+1
        goalsAgainst: 15,//10+1+4
        yellowCards: 1,//1+0+
        redCards: 0
      },
      {
        teamName: Teams.FCCuaLo,
        point: 7,
        won: 2,
        lost: 0,
        draw: 1,
        goalsFor: 22,//10+1+11
        goalsAgainst: 2,//0+1+1
        yellowCards: 3,//1+2+0
        redCards: 0
      }
    ].sort((a, b) => {
      return b.point - a.point ||
        (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst) ||
        b.goalsFor - a.goalsFor;
    });

    this.teamResultGroupB = [
      {
        teamName: Teams.FC3Mien,
        point: 1,
        won: 1,
        lost: 1,
        draw: 1,
        goalsFor: 14,//0+1+13
        goalsAgainst: 6,//3+1+2
        yellowCards: 0,//0+0+
        redCards: 0
      },
      {
        teamName: Teams.BFC2,
        point: 7,
        won: 2,
        lost: 0,
        draw: 1,
        goalsFor: 15,//3+8+4
        goalsAgainst: 4,//0+0+4
        yellowCards: 3,//2+1+
        redCards: 0
      },
      {
        teamName: Teams.VietSentinels,
        point: 4,
        won: 1,
        lost: 0,
        draw: 2,
        goalsFor: 12,//7+1+4
        goalsAgainst: 6,//1+1+4
        yellowCards: 0,//0+0+
        redCards: 0
      },
      {
        teamName: Teams.SaiGonUnited,
        point: 0,
        won: 0,
        lost: 3,
        draw: 0,
        goalsFor: 3,//1+0+2
        goalsAgainst: 28,//7+8+13
        yellowCards: 2,//1+1
        redCards: 0
      }
    ].sort((a, b) => {
      return b.point - a.point ||
        (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst) ||
        b.goalsFor - a.goalsFor;
    });
  }
}
