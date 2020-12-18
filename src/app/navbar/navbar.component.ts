import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public show:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.show = !this.show;
  }
}
