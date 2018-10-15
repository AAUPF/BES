import { RouterModule, Routes } from '@angular/router';

import { QualityOfExpenditureComponent } from './state-finances-content/quality-of-expenditure/quality-of-expenditure.component';

import { SectoralExpenditureComponent } from './state-finances-content/sectoral-expenditure/sectoral-expenditure.component';
import { SectoralExpenditure1Component } from './state-finances-content/sectoral-expenditure1/sectoral-expenditure1.component';
import { SectoralExpenditure2Component } from './state-finances-content/sectoral-expenditure2/sectoral-expenditure2.component';
import { ComparisonOfBudgetComponent } from './state-finances-content/comparison-of-budget/comparison-of-budget.component';
import { ComparisonOfBudget1Component } from './state-finances-content/comparison-of-budget1/comparison-of-budget1.component';
import { TaxDepartment7Component } from './state-finances-content/tax-department7/tax-department7.component';
import { GoogleComponent } from './google/google.component';
import { MiningComponent } from './enterprises-content/mining/mining.component';
import { AgroBasedIndustries6Component } from './enterprises-content/agro-based-industries6/agro-based-industries6.component';



export const appRoutes1: Routes = [
    {
        path: 'Enterprises-Sector/AgroBasedIndustries6',
        component: AgroBasedIndustries6Component

    },
    {
        path: 'Enterprises-Sector/mining',
        component: MiningComponent

    },
    {
        path: 'google',
        component: GoogleComponent

    },

    {
        path: 'TaxDepartment7',
        component: TaxDepartment7Component

    },
    {
        path: 'ComparisonOfBudget1',
        component: ComparisonOfBudget1Component

    },
    {
        path: 'ComparisonOfBudget',
        component: ComparisonOfBudgetComponent

    },
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