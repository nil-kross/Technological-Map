import { IEquipment } from './../../shared/IEquipment';
import { controls } from './../../shared/Controls';
import { equipements } from './../../shared/Equipment';
import { instruments } from './../../shared/Instruments';
import { Component, OnInit } from '@angular/core';
import { operationGroups } from '../../shared/OperationGroups';
import { IOperationGroup } from '../../shared/IOperationGroup';
import { IInstrument } from '../../shared/IInstrument';
import { IControl } from '../../shared/IControl';

@Component({
  selector: 'operation-manager',
  templateUrl: './operation-manager.component.html',
  styleUrls: ['./operation-manager.component.css']
})
export class OperationManagerComponent implements OnInit {

  get operationGroupOptions(): IOperationGroup[] {
    return operationGroups;
  }

  get instrumentOptions(): IInstrument[] {
    return instruments;
  }

  get equipmentOptions(): IEquipment[] {
    return equipements;
  }

  get controlOptions(): IControl[] {
    return controls;
  }

  constructor() { }

  ngOnInit() {
  }

  onSaveClick() {
    // TODO
  }

  onDeleteClick() {
    // TODO
  }

  onMoveUpClick() {
    // TODO
  }

  onMoveDownClick() {
    // TODO
  }

}
