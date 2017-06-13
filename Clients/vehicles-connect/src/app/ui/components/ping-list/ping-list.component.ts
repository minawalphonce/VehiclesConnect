import { Component, Input, Output, EventEmitter } from '@angular/core';

import { VehicleDto } from '../../../api-proxy';

@Component({
  selector: 'vc-ping-list',
  templateUrl: './ping-list.component.html',
  styleUrls: ['./ping-list.component.less']
})
export class PingListComponent {

  @Input() list: VehicleDto[];
  @Output() ping = new EventEmitter<VehicleDto>();
  @Output() startPings = new EventEmitter<VehicleDto>();
  @Output() stopPings = new EventEmitter<VehicleDto>();

  constructor() { }

  pingOnceClicked(item: VehicleDto) {
    this.ping.emit(item);
  }
  startPingingClicked(item: VehicleDto) {
    this.startPings.emit(item);
  }
  stopPingingClicked(item: VehicleDto) {
    this.stopPings.emit(item);
  }
}
