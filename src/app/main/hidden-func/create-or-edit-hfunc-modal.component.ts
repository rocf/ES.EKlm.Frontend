import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
  selector: 'app-create-or-edit-hfunc-modal',
  templateUrl: './create-or-edit-hfunc-modal.component.html',
  styles: [`.user-edit-dialog-profile-image {
                margin-bottom: 20px;
              }`
          ],
  
})
export class CreateOrEditHFuncModalComponent extends AppComponentBase implements OnInit {

  @ViewChild('createOrEditModal', {static: true}) modal: ModalDirective;

  constructor(
    injector: Injector
    
  ) { 
    super(injector);
  }

  ngOnInit(): void {
  }

  show() : void {
    this.modal.show();
  }

  onShow() : void {

  }
}
