import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CultureService } from 'src/app/services/culture.service';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  constructor(
    private culture: CultureService,
    private localization: LocalizationService,
    private alertController: AlertController
  ) {}

  defaultLang: string = '';

  pageTitle = 'Profile';

  ngOnInit() {
    console.log(this.culture.getCurrentLanguage());
    this.defaultLang = this.culture.getCurrentLanguage();
  }

  init() {}

  changeLang(event: any) {
    console.log(event.detail.value);
    this.culture.changeLanguage(event.detail.value);
  }

  async resetAlert() {
    const alert = await this.alertController.create({
      header: await this.culture.localize('test.titles'),
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'Confirm',
          role: 'confirm',
          handler: () => {},
        },
      ],
    });

    await alert.present();
  }
}
