import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-admin-get-profile',
  templateUrl: './admin-get-profile.component.html',
  styleUrls: ['./admin-get-profile.component.scss']
})
export class AdminGetProfileComponent 
{
  profile:UserInfo=new UserInfo();

  constructor(private router:Router){}

  goToAdminProfile()
  {
    this.router.navigate(['/adminProfile']);
  }
}
