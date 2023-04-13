import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent 
{
  userInfo:UserInfo=new UserInfo();

  constructor(private router:Router){}

  OnSubmit()
  {

  }
  goToAdminGetProfile()
  {
    this.router.navigate(['/adminGetProfile']);
  }

}
