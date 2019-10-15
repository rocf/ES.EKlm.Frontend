import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { HFuncServiceProxy, HFuncListDto, ListResultDtoOfHFuncListDto } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-hidden-func',
  templateUrl: './hidden-func.component.html',
  styleUrls: ['./hidden-func.component.less'],
  animations: [appModuleAnimation()]
})
export class HiddentFuncComponent extends AppComponentBase implements OnInit {

  hfunc: HFuncListDto[] = [];
  filter: string = "";

  constructor( 
    injector: Injector,
    private _hFuncService: HFuncServiceProxy) { 
    super(injector);
  }

  ngOnInit() : void {
    this.getHFunc();
  }

  getHFunc(): void {
    this._hFuncService.getHFunc(this.filter).subscribe((r) => {
      this.hfunc = r.items;
    })
  }

}
