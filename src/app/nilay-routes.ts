import { RouterModule, Routes } from '@angular/router';

import { QualityOfExpenditureComponent } from './state-finances-content/quality-of-expenditure/quality-of-expenditure.component';

import { SectoralExpenditureComponent } from './state-finances-content/sectoral-expenditure/sectoral-expenditure.component';
import { SectoralExpenditure1Component } from './state-finances-content/sectoral-expenditure1/sectoral-expenditure1.component';
import { SectoralExpenditure2Component } from './state-finances-content/sectoral-expenditure2/sectoral-expenditure2.component';


export const appRoutes1: Routes = [
    {
        path: 'SectoralExpenditure2',
        component: SectoralExpenditure2Component

    },
    {
        path: 'SectoralExpenditure1',
        component: SectoralExpenditure1Component

    },
    {
        path: 'quality-of-expenditure',
        component: QualityOfExpenditureComponent

    },
    {
        path: 'sectoral-expenditure',
        component: SectoralExpenditureComponent

    }
]