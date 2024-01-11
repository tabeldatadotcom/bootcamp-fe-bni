import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  // selector: '[app-root]',
  // selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChildren('inputName') inputElements !: QueryList<ElementRef>

  fullName : string = '';

  submitForm(){
    // console.log(this.inputElements);
    let name : string = '';
    this.inputElements.forEach((p) => {
        name += p.nativeElement.value
    })
    this.fullName = name
  }

  // NG-Container
  toggle : boolean = true;

  onToggle(){
    this.toggle = !this.toggle
  }

  // NG Switch
  tab : string = '';

  handleMenuChanged(event : any){
    this.tab = event
  }

}
