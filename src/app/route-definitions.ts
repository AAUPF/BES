import { RouterModule, Routes } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { AgricultureComponent } from './agriculture/agriculture.component';


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
        path: 'agriculture',
        component: AgricultureComponent
     }
 ];
