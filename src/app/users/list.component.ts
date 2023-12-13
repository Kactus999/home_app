import { Component, OnInit, signal } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
  users?: any[];
  filteredUsers?: any[];

  constructor(
    private accountService: AccountService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.accountService
      .getAll()
      .pipe(first())
      .subscribe((users) => {
        this.users = users;
        this.filteredUsers = users;
      });
  }

  filterResults(event: Event) {
    const text = (event.target as HTMLInputElement).value.toLowerCase();
    if (!text) {
      this.filteredUsers = this.users;
      return;
    }
    this.filteredUsers = this.users?.filter((user: any) => {
      if (user && user.firstName && typeof user.firstName === 'string') {
        return user.firstName.toLowerCase().includes(text);
      }
    });
  }

  deleteUser(id: string) {
    const user = this.users!.find((x) => x.id === id);
    user.isDeleting = true;
    this.accountService
      .delete(id)
      .pipe(first())
      .subscribe({
        next: () => {
          this.users = this.users!.filter((x) => x.id !== id);
          this.alertService.success('Delete successful');
        },
        error: (error) => {
          this.alertService.error(error);
        },
      });
  }
}
