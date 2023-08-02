import { Injectable } from "@angular/core";
import { Teams } from "./teams";
import { MenuController } from "@ionic/angular";
import { StaticVariable } from "./staticVariable";

@Injectable({
  providedIn: 'root'
})
export class CommonFunctions {
  constructor(private menuCtrl: MenuController) { }
  getTeamImageStyle(team: string, displayLogo = false): string {
    let imagePath: string;
    // Map each team to a CSS class based on the uniform color
    switch (team) {
      case Teams.BFC1:
      case Teams.BFC2:
      case 'BFC1(*)':
      case 'BFC2(*)':
        imagePath = `${StaticVariable.ImagesPath}` + (displayLogo ? `${StaticVariable.YellowTeam}` : `${StaticVariable.BFCLogo}`);
        break;
      case Teams.FC3Mien:
      case '3 Miền FC(*)':
        imagePath = `${StaticVariable.ImagesPath}` + (displayLogo ? `${StaticVariable.RedTeam}` : `${StaticVariable.FC3MienLogo}`);
        break;
      case Teams.FCCuaLo:
      case 'FC Cửa Lò(*)':
        imagePath = `${StaticVariable.ImagesPath}` + (displayLogo ? `${StaticVariable.BlueTeam}` : `${StaticVariable.FCCuaLoLogo}`);
        break;
      case Teams.SaiGonUnited:
      case 'Sài Gòn United(*)':
        imagePath = `${StaticVariable.ImagesPath}` + (displayLogo ? `${StaticVariable.BlueTeam}` : `${StaticVariable.SaigonUnitedLogo}`);
        break;
      case Teams.Stechco:
      case 'Stechco(*)':
        imagePath = `${StaticVariable.ImagesPath}` + (displayLogo ? `${StaticVariable.BlueTeam}` : `${StaticVariable.StechcoLogo}`);
        break;
      case Teams.VietSentinels:
      case 'Viet Sentinels(*)':
        imagePath = `${StaticVariable.ImagesPath}` + (displayLogo ? `${StaticVariable.BlueTeam}` : `${StaticVariable.VietSentinelsLogo}`);
        break;
      case Teams.VMU:
      case 'VMU(*)':
        imagePath = `${StaticVariable.ImagesPath}` + (displayLogo ? `${StaticVariable.BlueTeam}` : `${StaticVariable.VMULogo}`);
        break;
      default:
        imagePath = `${StaticVariable.ImagesPath}` + (displayLogo ? `${StaticVariable.WhiteTeam}` : `${StaticVariable.CupLogo}`);
        break;
    };
    return imagePath;
  }

  enableMenuSwipe() {
    this.menuCtrl.swipeGesture(true, 'menu-content');
    this.menuCtrl.enable(true, 'menu-content');
  }
}
