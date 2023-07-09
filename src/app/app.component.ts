import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CultureService } from './services/culture.service';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private culture: CultureService) {}

  async initializeApp() {
    // ... other initialization code

    await StatusBar.setBackgroundColor({ color: '#FF0000' });
    await StatusBar.setStyle({ style: Style.Dark });
  }
}
