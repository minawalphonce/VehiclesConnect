import { Component, Input } from '@angular/core';

@Component({
  selector: 'vc-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.less']
})
export class LogsComponent {
  @Input() list: string[];

  constructor() { }
}
