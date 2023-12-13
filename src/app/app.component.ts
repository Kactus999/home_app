﻿import { Component } from '@angular/core';

import { AccountService } from './common/_services';
import { User } from './common/_models';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
  user?: User | null;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.accountService.logout();
  }
}
