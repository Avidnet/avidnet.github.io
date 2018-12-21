import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  public today: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}