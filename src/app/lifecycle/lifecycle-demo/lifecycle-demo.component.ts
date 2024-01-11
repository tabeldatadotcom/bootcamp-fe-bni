import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  templateUrl: './lifecycle-demo.component.html',
  styleUrls: ['./lifecycle-demo.component.css']
})
export class LifecycleDemoComponent implements OnChanges ,OnInit ,DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    title : string = 'Lifecycle Demo';
    @Input() message : string = 'Hello';

    @ContentChild('temp') paraContent !: ElementRef;

    constructor(){
      // console.log('Constructor Child Called');
      // console.log(this.title)
      // console.log(this.message)
    }

    ngOnChanges(changes : SimpleChanges): void {
      // console.log('ngOnChanges Child Called');
      // console.log(this.message)
      // console.log(changes)
    }

    ngOnInit(): void {
        console.log('ngOnInit Child Called');
        // console.log('In ngOnInit', this.paraContent)
    }

    ngDoCheck(): void {
        // console.log('ngDoCheck Child Called');
        // console.log('In ngDoCheck', this.paraContent);
    }

    ngAfterContentInit(): void {
        // console.log('ngAfterContentInit Child Called')
        // console.log('In ngAfterContentInit', this.paraContent)
    }

    ngAfterContentChecked(): void {
        // console.log('ngAfterContentChecked Child Called');
    }

    ngAfterViewInit(): void {
        // console.log('ngAfterViewInit Child Called');
    }

    ngAfterViewChecked(): void {
        // console.log('ngAfterViewChecked Child Called');
    }

    ngOnDestroy(): void {
      console.log('ngOnDestroy Child Called');
    }

}
