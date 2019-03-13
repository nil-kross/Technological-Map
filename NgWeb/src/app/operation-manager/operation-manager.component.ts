import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
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
  @Input() operationId: number;
  @ViewChild('operationGroupSelect') operationGroupSelect: ElementRef<HTMLSelectElement>;
  @ViewChild('instrumentSelect') instrumentSelect: ElementRef<HTMLSelectElement>;
  @ViewChild('equipmentSelect') equipmentSelect: ElementRef<HTMLSelectElement>;
  @ViewChild('controlSelect') controlSelect: ElementRef<HTMLSelectElement>;
  @Output() addOperation = new EventEmitter<IOperation>();

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
      this.addOperation.emit(operation);

      this.operationGroupSelect.nativeElement.value = (-1).toString();
      this.instrumentSelect.nativeElement.value = (-1).toString();
      this.equipmentSelect.nativeElement.value = (-1).toString();
      this.controlSelect.nativeElement.value = (-1).toString();
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

  private patchUi() {
    this.operationGroupSelect.nativeElement.value = this.operationId.toString();
  }

}
