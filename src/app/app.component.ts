import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'translate';
  listhinding = 'Change Language';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'hi', 'mr', 'te']);
    translate.setDefaultLang('en');
    translate.use('hi');
  }
}
