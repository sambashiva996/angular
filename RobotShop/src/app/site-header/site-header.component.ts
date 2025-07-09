import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
  imports: [RouterModule, CommonModule]
})
export class SiteHeaderComponent implements OnInit{

  user: IUser | null = null;
  showSignOutMenu: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (user) => {this.user = user}
    })
  }

  toggleSignOutMenu(){
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut(){
    this.userService.signOut();
    this.showSignOutMenu = false;
  }

}
