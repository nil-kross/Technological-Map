import { Component, OnInit, ViewChild } from '@angular/core';
import { IControl } from '../../shared/IControl';
import { IInstrument } from '../../shared/IInstrument';
import { IOperation } from '../../shared/IOperation';
import { IOperationGroup } from '../../shared/IOperationGroup';
import { OperationService } from '../operation.service';
import { controls } from './../../shared/Controls';
import { equipements } from './../../shared/Equipment';
import { IEquipment } from './../../shared/IEquipment';
import { instruments } from './../../shared/Instruments';
import { operationGroups } from './../../shared/OperationGroups';

@Component({
  selector: 'operation-manager',
  templateUrl: './operation-manager.component.html'
})
export class OperationManagerComponent implements OnInit {
  @ViewChild('operationGroupSelect') operationGroupSelect: HTMLSelectElement;
  @ViewChild('instrumentSelect') instrumentSelect: HTMLSelectElement;
  @ViewChild('equipmentSelect') equipmentSelect: HTMLSelectElement;
  @ViewChild('controlSelect') controlSelect: HTMLSelectElement;

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

  constructor(private operationService: OperationService) { }

  ngOnInit() {
  }

  onSaveClick() {
    const operationGroupId = +this.operationGroupSelect.nativeElement.value;
    const instrumentId = +this.instrumentSelect.nativeElement.value;
    const equipmentId = +this.equipmentSelect.nativeElement.value;
    const controlId = +this.controlSelect.nativeElement.value;
    console.log(`${operationGroupId} ${instrumentId} ${equipmentId} ${controlId}`); // DEBUG

    if (operationGroupId && instrumentId
        && equipmentId && controlId) {
      const operationGroup = operationGroups.find(x => x.id === operationGroupId);
      const instrument = instruments.find(x => x.id === instrumentId);
      const equipment = equipements.find(x => x.id === equipmentId);
      const control = controls.find(x => x.id === controlId);
      const operation: IOperation = {
        group: operationGroup,
        instrument: instrument,
        equipment: equipment,
        control: control,
        transitions: []
      };

      this.operationService.add(operation);
      console.log(operation); // DEBUG
    }
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
