import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CultureService } from './services/culture.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private culture: CultureService) {}
}
