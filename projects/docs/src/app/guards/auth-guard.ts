import { Injectable } from "@angular/core"
import { CanLoad } from "@angular/router"

@Injectable()
export class AuthGuard implements CanLoad {

  constructor() {}

  checkTokenExpiration() {
      return true;
  }

  canLoad() {
    return this.checkTokenExpiration()
  }
}
