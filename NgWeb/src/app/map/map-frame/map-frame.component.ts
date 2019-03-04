import { Component, OnInit } from '@angular/core';
import { OperationService } from '../../operation.service';

@Component({
  selector: 'map-frame',
  templateUrl: './map-frame.component.html'
})
export class MapFrameComponent implements OnInit {
  get operations() {
    return this.operationService.operations;
  }

  constructor(private operationService: OperationService) { }

  ngOnInit() {
    console.log(this.operations);
  }

}
