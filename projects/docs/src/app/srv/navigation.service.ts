import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private history: string[] = [];

  get previous() {
    return [this.history[this.history.length - 1]];
  }
  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    });
  }

  navigate(route: string, data?: any): void {
    this.router.navigate([route, { data: data }], { skipLocationChange: true });
  }

}