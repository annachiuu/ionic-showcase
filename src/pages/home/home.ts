import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BackendService } from '../../services/backendService';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  designers = ['anna', 'mana', 'janna']

  constructor(public navCtrl: NavController,
  public backendService: BackendService) {

  }


  toDesignerProfile(designer) {
    this.navCtrl.push(ProfilePage);
  }

}
