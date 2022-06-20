import { Component, HostBinding, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.css'],
})
export class ProgressCircleComponent implements OnInit {
  constructor() {}
  onVisible(isVisible: Boolean) {
    this.ariaValuenow = this.progress
    this.value = this.progress
    this.animation = 'growProgressBar 4s 1 forwards'
  }

  @Input()
  progress: number = 0
  @HostBinding('style.--size')
  private size: string = '6rem'
  @HostBinding('style.--value')
  private value: number = 0
  @HostBinding('style.--animation')
  private animation: string = 'none'
  ariaValuenow = 0

  ngOnInit(): void {}
}
