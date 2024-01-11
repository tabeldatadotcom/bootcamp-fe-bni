import { Component } from '@angular/core';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent {


    constructor(private useService : UserService){

    }

    userLists : User[] = this.useService.GetAllUser();

}
