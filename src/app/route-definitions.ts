import { RouterModule, Routes } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { AgriculturAlliedComponent } from './agricultur-allied/agricultur-allied.component';
import { LandComponent } from './land/land.component';
import { Rainfall2Component } from './rainfall2/rainfall2.component';



export const appRoutes: Routes = [

    {
       path: '',
       component: MaincontentComponent
    },
    {
        path: 'test',
        component: TestComponent
     },
     {
        path: 'agricultureallied',
        component: AgriculturAlliedComponent
     },
     {
        path: 'rainfall1',
        component: AgricultureComponent
     },
     {
        path: 'rainfall2',
        component: Rainfall2Component
     },
     {
        path: 'land1',
        component: LandComponent
     },
     
     {
        path: 'land2',
        component: LandComponent
     },


     
 ];
