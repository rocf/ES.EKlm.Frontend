import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HiddenFuncComponent } from './hidden-func/hidden-func.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                children: [
                    { path: 'dashboard', component: DashboardComponent, data: { permission: 'Pages.Tenant.Dashboard' } }
                ]
            },
            {path: 'hidden-func', component: HiddenFuncComponent},
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }
