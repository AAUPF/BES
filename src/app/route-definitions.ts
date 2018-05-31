import { RouterModule, Routes } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';

export const appRoutes: Routes = [

    {
       path: '',
       component: MaincontentComponent
    },
    {
        path: 'test',
        component: TestComponent
     }
 ];
