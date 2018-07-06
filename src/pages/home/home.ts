import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WinnersPage } from '../winners/winners';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  scoreForTeamA=0;
scoreForTeamB=0;

  constructor(public navCtrl: NavController) {

  }
  teamA(value:number):void{
    this.scoreForTeamA +=value;
    
  // this.scoreForTeamA =this.scoreForTeamA + value;
  }
  teamB(value:number):void{
    this.scoreForTeamB +=value;
    
  // this.scoreForTeamA =this.scoreForTeamB + value;
  }
  reSet(value:number):void{
    this.scoreForTeamA=value;
    this.scoreForTeamB =value;
  }
 endMatch():void{
   this.navCtrl.push(WinnersPage);
 }
}

