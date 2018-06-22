import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget2',
  templateUrl: './widget2.component.html',
  styleUrls: ['./widget2.component.scss']
})
export class Widget2Component implements OnInit {
  @Input() title;
  constructor() { }

  ngOnInit() {
  }

}
