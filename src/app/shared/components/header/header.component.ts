import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  Title = "Irincode Calling APIs"
  constructor() { }

  ngOnInit(): void {
  }
}
