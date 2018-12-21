import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  @HostBinding('attr.class') elementClasses = ["section-container"];
  @HostBinding('style.height.px') elementHeight = window.innerHeight;

  constructor() { }

  ngOnInit() {
  }

}