import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  @Input() isHidden = false;
  @Input() title: string;
  @Input() justViewed: boolean;

  constructor() { }

  ngOnInit() {
  }

}
