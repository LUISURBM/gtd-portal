import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from './srv/theme.service';
import { NgGtdThemes } from './types/common-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'docs';

  constructor(public themeSrv:ThemeService){
  }

  get themeState$(){
    return this.themeSrv.themeState$;
  }


}
