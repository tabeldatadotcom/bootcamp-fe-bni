import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() searchText : EventEmitter<string> = new EventEmitter();

  // CHILD
  @ViewChild('inputText') searchInputEl !: ElementRef

  cari(){
      // console.log(this.searchInputEl.nativeElement.value)
      this.searchText.emit(this.searchInputEl.nativeElement.value)
  }

}
