import { Component, HostBinding, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  @HostBinding('class') flex = 'flex flex-col grow'

  ngOnInit(): void {}
}
