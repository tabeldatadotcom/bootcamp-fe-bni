import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{

  inputVal : string = '';

  toDestroy : boolean = true;

  DestroyComponent(){
    this.toDestroy = !this.toDestroy
  }

  constructor(){
      // console.log('Constructor Parent Called');
  }

  onBtnClick(input : any){
      this.inputVal = input.value
  }

  ngOnChanges(): void {
      // console.log('ngOnChanges Parent Called');
  }

  ngOnInit(): void {
      // console.log('ngOnInit Parent Called');
  }

  ngDoCheck(): void {
      // console.log('ngDoCheck Parent Called');
  }

  ngAfterContentInit(): void {
      // console.log('ngAfterContentInit Parent Called');
  }

  ngAfterContentChecked(): void {
      // console.log('ngAfterContentChecked Parent Called');
  }

  ngAfterViewInit(): void {
      // console.log('ngAfterViewInit Parent Called')
  }

  ngAfterViewChecked(): void {
      // console.log('ngAfterViewChecked Parent Called');
  }

}

