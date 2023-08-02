import { Component, OnInit } from '@angular/core';
import { PlayerResult } from 'src/models/PlayerResult';
import { Teams } from 'src/shared/teams';

@Component({
  selector: 'app-player-result',
  templateUrl: './player-result.page.html',
  styleUrls: ['./player-result.page.scss'],
})
export class PlayerResultPage implements OnInit {
  playerResults: PlayerResult[] = [];
  showGoalsStatic = true;
  displayTitle = '';
  constructor() {
    this.showPlayersResult();
  }

  changValue(event: any) {
    this.showGoalsStatic = event.detail.value === 'goals';
    this.showPlayersResult();
  }

  ngOnInit() { }

  showPlayersResult() {
    if (this.showGoalsStatic) {
      this.displayTitle = 'Danh sách cầu thủ ghi bàn';
    } else {
      this.displayTitle = 'Danh sách cầu thủ kiến tạo';
    }

    this.playerResults = [
      {
        teamName: Teams.Stechco,
        playerName: 'Đỗ Văn Trung',
        playerNumber: 9,
        goals: 2,//0+1+0+1
        assists: 3,//1+0+2
        yellowCards: 0,
        redCards: 0,
      }
    ].filter((p) => {
      if (this.showGoalsStatic) {
        return p.goals > 0;
      } else {
        return p.assists > 0;
      }
    })
      .sort((a, b) => {
        if (this.showGoalsStatic) {
          return b.goals - a.goals;
        } else {
          return b.assists - a.assists;
        }
      });
  }
}
