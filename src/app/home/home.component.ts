import { Component, OnInit } from '@angular/core';

import { User } from "../models/user";
import { UserService } from "../services";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    // get users from secure api and point
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      })
  }

}
