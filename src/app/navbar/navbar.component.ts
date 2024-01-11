import { Component, EventEmitter, Output } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  constructor(private subsService : SubscribeService){

  }

  menus : any[] =
   [
      {
        name : 'Produk',
        path : 'produk'
      },
      {
        name : 'Lifecycle',
        path : 'lifecycle'
      },
      {
        name : 'Admin',
        path : 'admin'
      }
   ];

   @Output() selectedMenuChange : EventEmitter<string> = new EventEmitter<string>();

   onSelectedMenu(path : string){
      this.selectedMenuChange.emit(path);
   }

   onSubscribe(){
      // let service = new SubscribeService();
      // service.onSubscribeClicked();
      this.subsService.onSubscribeClicked();
   }

}
