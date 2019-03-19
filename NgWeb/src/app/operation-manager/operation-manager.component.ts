import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
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
import { emptyId } from '../../shared/EmptyId';

@Component({
  selector: 'operation-manager',
  templateUrl: './operation-manager.component.html'
})
export class OperationManagerComponent implements OnInit, OnChanges {
  @Input() operationId: number;
  @ViewChild('operationGroupSelect') operationGroupSelect: ElementRef<HTMLSelectElement>;
  @ViewChild('instrumentSelect') instrumentSelect: ElementRef<HTMLSelectElement>;
  @ViewChild('equipmentSelect') equipmentSelect: ElementRef<HTMLSelectElement>;
  @ViewChild('controlSelect') controlSelect: ElementRef<HTMLSelectElement>;
  @Output() addOperation = new EventEmitter<IOperation>();

  operationGroupId = 0;
  instrumentId = 0;
  equipmentId = 0;
  controlId = 0;

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

  get isNewOperation(): boolean {
    return !(this.operationId && this.operationId > 0);;
  }

  get isControlsValid(): boolean {
    const isValid = this.operationGroupId > 0 &&
                    this.instrumentId > 0 &&
                    this.equipmentId > 0 &&
                    this.controlId > 0;

    return isValid;
  }

  constructor(private operationService: OperationService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'operationId' && changes[propName].currentValue >= 0) {
        this.patchUi();
      }
    }
  }

  onOperationGroupChange() {
    this.operationGroupId = +this.operationGroupSelect.nativeElement.value;
  }

  onInstrumentChange() {
    this.instrumentId = +this.instrumentSelect.nativeElement.value;
  }

  onEquipmentChange() {
    this.equipmentId = +this.equipmentSelect.nativeElement.value;
  }

  onControlChange() {
    this.controlId = +this.controlSelect.nativeElement.value;
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
        id: this.operationService.operations.length + 1,
        group: operationGroup,
        groupId: operationGroupId,
        instrument: instrument,
        instrumentId,
        equipment: equipment,
        equipmentId: equipmentId,
        control: control,
        controlId: controlId,
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
    let operationGroupId = 0;
    let instrumentId = 0;
    let equipementId = 0;
    let controlId = 0;

    if (this.operationService.operations.length > 0) {
      const operation = this.operationService.operations.find((x) => x.id === this.operationId);

      operationGroupId = operation ? operation.groupId : emptyId;
      instrumentId = operation ? operation.instrumentId : emptyId;
      equipementId = operation ? operation.equipmentId : emptyId;
      controlId = operation ? operation.controlId : emptyId;
    }

    this.operationGroupId = operationGroupId;
    this.instrumentId = instrumentId;
    this.equipmentId = equipementId;
    this.controlId = controlId;
  }
}
