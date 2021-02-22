import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}
  loggedIn: boolean = false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model)
      .subscribe(response => {
        console.log(response);
        this.loggedIn = true;
      }, error => {
        console.log(error);
      })
  }

  logout() {
    this.accountService.logout();
    this.loggedIn = false;
  }

  getCurrentUser() {
    this.accountService.currentUser$.subscribe(user => {
      this.loggedIn = !!user;
    })
  }
}
