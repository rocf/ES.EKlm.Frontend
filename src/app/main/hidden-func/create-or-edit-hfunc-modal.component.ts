import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
  selector: 'app-create-or-edit-hfunc-modal',
  templateUrl: './create-or-edit-hfunc-modal.component.html',
  styles: [],

})
export class CreateOrEditHFuncModalComponent extends AppComponentBase {

  @ViewChild('createOrEditModal', { static: true }) createOrEditModal: ModalDirective;

  active = false;

  constructor(
    injector: Injector

  ) {
    super(injector);
  }



  show(): void {
    this.active = true
    this.createOrEditModal.show();
  }

  onShown(): void {

  }

  save(): void {

  }

  close(): void {
    this.active = false
    this.createOrEditModal.hide()
  }
}
