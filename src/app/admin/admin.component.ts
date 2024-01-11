import { User } from './../Model/User';
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[UserService]
})
export class AdminComponent {

  constructor(private User : UserService){

  }

}
