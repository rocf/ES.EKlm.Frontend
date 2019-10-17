import { Component, Injector, OnInit, ViewEncapsulation, ViewChild, Output } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { HFuncServiceProxy, HFuncListDto, ListResultDtoOfHFuncListDto } from '@shared/service-proxies/service-proxies';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { Paginator } from 'primeng/components/paginator/paginator';
import { Table } from 'primeng/components/table/table';
import { PrimengTableHelper } from 'shared/helpers/PrimengTableHelper';
import { FileUpload } from 'primeng/fileupload';

import { CreateOrEditHFuncModalComponent } from './create-or-edit-hfunc-modal.component'

@Component({
  selector: 'app-hidden-func',
  templateUrl: './hidden-func.component.html',
  styleUrls: ['./hidden-func.component.less'],
  encapsulation: ViewEncapsulation.None,
  animations: [appModuleAnimation()]
})
export class HiddenFuncComponent extends AppComponentBase implements OnInit {

  @ViewChild('createOrEditHFuncModal', {static: true}) createOrEditHFuncModal: CreateOrEditHFuncModalComponent;

  @ViewChild('dataTable', { static: true }) dataTable: Table;
  @ViewChild('paginator', { static: true }) paginator: Paginator;

  @Output()

  hfunc: HFuncListDto[] = [];
  filter: string = "";

  constructor(
    injector: Injector,
    private _hFuncServiceProxy: HFuncServiceProxy
  ) {
    super(injector);
  }

  ngOnInit(): void {
    //this.primengTableHelper.resizableColumns = true;
    this.getHFunc();
  }

  getHFunc(event?: LazyLoadEvent): void {
    this._hFuncServiceProxy.getHFunc(this.filter).subscribe((r) => {
      this.hfunc = r.items;
    })
  }

  createHFunc(): void {
    this.createOrEditHFuncModal.show();
  }

}
