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
import { Tourism3Component } from './enterprises-content/tourism3/tourism3.component';
import { DrinkingWaterSupplyAndSanitationComponent } from './human-development-content/drinking-water-supply-and-sanitation/drinking-water-supply-and-sanitation.component';
import { DrinkingWaterSupplyAndSanitation1Component } from './human-development-content/drinking-water-supply-and-sanitation1/drinking-water-supply-and-sanitation1.component';
import { DrinkingWaterSupplyAndSanitation2Component } from './human-development-content/drinking-water-supply-and-sanitation2/drinking-water-supply-and-sanitation2.component';
import { DrinkingWaterSupplyAndSanitation3Component } from './human-development-content/drinking-water-supply-and-sanitation3/drinking-water-supply-and-sanitation3.component';
import { DrinkingWaterSupplyAndSanitation4Component } from './human-development-content/drinking-water-supply-and-sanitation4/drinking-water-supply-and-sanitation4.component';

import { SocialWelfareComponent } from './human-development-content/social-welfare/social-welfare.component';
import { SocialWelfare1Component } from './human-development-content/social-welfare1/social-welfare1.component';
import { SocialWelfare2Component } from './human-development-content/social-welfare2/social-welfare2.component';
import { SocialWelfare3Component } from './human-development-content/social-welfare3/social-welfare3.component';



import { DistrictWiseSectionComponent } from './human-development-content/district-wise-section/district-wise-section.component';
import { DistrictWiseSection1Component } from './human-development-content/district-wise-section1/district-wise-section1.component';
import { DistrictWiseSection2Component } from './human-development-content/district-wise-section2/district-wise-section2.component';
import { DistrictWiseSection3Component } from './human-development-content/district-wise-section3/district-wise-section3.component';
import { DistrictWiseSection4Component } from './human-development-content/district-wise-section4/district-wise-section4.component';
import { DistrictWiseSection5Component } from './human-development-content/district-wise-section5/district-wise-section5.component';
import { DistrictWiseSection6Component } from './human-development-content/district-wise-section6/district-wise-section6.component';
import { DistrictWiseSection7Component } from './human-development-content/district-wise-section7/district-wise-section7.component';
import { DistrictWiseSection8Component } from './human-development-content/district-wise-section8/district-wise-section8.component';
import { DistrictWiseSection9Component } from './human-development-content/district-wise-section9/district-wise-section9.component';
import { DistrictWiseSection10Component } from './human-development-content/district-wise-section10/district-wise-section10.component';
import { DistrictWiseSection11Component } from './human-development-content/district-wise-section11/district-wise-section11.component';

export const appRoutes1: Routes = [


    {
        path: 'DistrictWiseSection',
        component: DistrictWiseSectionComponent

    },
    {
        path: 'DistrictWiseSection1',
        component: DistrictWiseSection1Component

    },
    {
        path: 'DistrictWiseSection2',
        component: DistrictWiseSection2Component

    },
    {
        path: 'DistrictWiseSection3',
        component: DistrictWiseSection3Component

    },
    {
        path: 'DistrictWiseSection4',
        component: DistrictWiseSection4Component

    },
    {
        path: 'DistrictWiseSection5',
        component: DistrictWiseSection5Component

    },
    {
        path: 'DistrictWiseSection6',
        component: DistrictWiseSection6Component

    },
    {
        path: 'DistrictWiseSection7',
        component: DistrictWiseSection7Component

    },
    {
        path: 'DistrictWiseSection8',
        component: DistrictWiseSection8Component

    },
    {
        path: 'DistrictWiseSection9',
        component: DistrictWiseSection9Component

    },
    {
        path: 'DistrictWiseSection10',
        component: DistrictWiseSection10Component

    },
    {
        path: 'DistrictWiseSection11',
        component: DistrictWiseSection11Component

    },


    {
        path: 'SocialWelfare',
        component: SocialWelfareComponent

    },
    {
        path: 'SocialWelfare1',
        component: SocialWelfare1Component

    },
    {
        path: 'SocialWelfare2',
        component: SocialWelfare2Component

    },
    {
        path: 'SocialWelfare3',
        component: SocialWelfare3Component

    },

    {
        path: 'DrinkingWaterSupplyAndSanitation1',
        component: DrinkingWaterSupplyAndSanitation1Component

    },
    {
        path: 'DrinkingWaterSupplyAndSanitation2',
        component: DrinkingWaterSupplyAndSanitation2Component

    },
    {
        path: 'DrinkingWaterSupplyAndSanitation3',
        component: DrinkingWaterSupplyAndSanitation3Component

    },
    {
        path: 'DrinkingWaterSupplyAndSanitation4',
        component: DrinkingWaterSupplyAndSanitation4Component

    },
    {
        path: 'DrinkingWaterSupplyAndSanitation',
        component: DrinkingWaterSupplyAndSanitationComponent

    },
    {
        path: 'Enterprises-Sector/Tourism3',
        component: Tourism3Component

    },
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