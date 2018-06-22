import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget3',
  templateUrl: './widget3.component.html',
  styleUrls: ['./widget3.component.scss']
})
export class Widget3Component implements OnInit {
  @Input() title;
  @Input() num;
  @Input() color;
  constructor() { }

  ngOnInit() {
    console.log(this.title);
  }

}
