import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');

    translate.use('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fa/) ? browserLang : 'en');
  }
}
