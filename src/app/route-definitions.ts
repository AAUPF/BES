import { RouterModule, Routes } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { AgriculturAlliedComponent } from './agricultur-allied/agricultur-allied.component';
import { HumanDevelopmentComponent } from './human-development/human-development.component';
import { LandComponent } from './land/land.component';
import { Land1Component } from './land1/land1.component';
import { Rainfall2Component } from './rainfall2/rainfall2.component';
import {Irrigation1Component} from './irrigation1/irrigation1.component';
import {Irrigation2Component} from './irrigation2/irrigation2.component';
import {Irrigation3Component} from './irrigation3/irrigation3.component';
import {Irrigation4Component} from './irrigation4/irrigation4.component';
import {Irrigation5Component} from './irrigation5/irrigation5.component';
import {Irrigation6Component} from './irrigation6/irrigation6.component';
import {CroppingPatternComponent} from './cropping-pattern/cropping-pattern.component';
import {AgriculturalCredit1Component} from './agricultural-credit1/agricultural-credit1.component';
import {AgriculturalCredit2Component} from './agricultural-credit2/agricultural-credit2.component';
import {ProductionProductivity1Component} from './production-productivity1/production-productivity1.component';
import {ProductionProductivity2Component} from './production-productivity2/production-productivity2.component';
import {ProductionProductivity3Component} from './production-productivity3/production-productivity3.component';
import {ProductionProductivity4Component} from './production-productivity4/production-productivity4.component';
import {ProductionProductivity5Component} from './production-productivity5/production-productivity5.component';
import {ProductionProductivity6Component} from './production-productivity6/production-productivity6.component';
import {ProductionProductivity7Component} from './production-productivity7/production-productivity7.component';
import {ProductionProductivity8Component} from './production-productivity8/production-productivity8.component';
import {ProductionProductivity9Component} from './production-productivity9/production-productivity9.component';
import {ProductionProductivity10Component} from './production-productivity10/production-productivity10.component';
import {ProductionProductivity11Component} from './production-productivity11/production-productivity11.component';
import {ProductionProductivity12Component} from './production-productivity12/production-productivity12.component';
import {AgriculturalInputs1Component} from './agricultural-inputs1/agricultural-inputs1.component';
import {AgriculturalInputs2Component} from './agricultural-inputs2/agricultural-inputs2.component';
import {AgriculturalInputs3Component} from './agricultural-inputs3/agricultural-inputs3.component';
import {AgriculturalInputs4Component} from './agricultural-inputs4/agricultural-inputs4.component';
import {AgriculturalInputs5Component} from './agricultural-inputs5/agricultural-inputs5.component';
import {AgriculturalInputs6Component} from './agricultural-inputs6/agricultural-inputs6.component';
//import {AgriculturalInputs7Component} from './agricultural-inputs7/agricultural-inputs7.component';
//import { AgriculturalInputs8Component } from './agricultural-inputs8/agricultural-inputs8.component';
import {AnimalHusbandry1Component} from './animal-husbandry1/animal-husbandry1.component';
import {AnimalHusbandry2Component} from './animal-husbandry2/animal-husbandry2.component';
import {AnimalHusbandry3Component} from './animal-husbandry3/animal-husbandry3.component';
import {AnimalHusbandry4Component} from './animal-husbandry4/animal-husbandry4.component';
import {AnimalHusbandry5Component} from './animal-husbandry5/animal-husbandry5.component';
import {AnimalHusbandry6Component} from './animal-husbandry6/animal-husbandry6.component';
import { Health1Component } from './human-development-content/health1/health1.component';
import { Health2Component } from './human-development-content/health2/health2.component';
import { Health3Component } from './human-development-content/health3/health3.component';
import { Health4Component } from './human-development-content/health4/health4.component';
import { Health5Component } from './human-development-content/health5/health5.component';
import { Health6Component } from './human-development-content/health6/health6.component';
import { Health7Component } from './human-development-content/health7/health7.component';
import { Health8Component } from './human-development-content/health8/health8.component';
import { Health9Component } from './human-development-content/health9/health9.component';
import { Health10Component } from './human-development-content/health10/health10.component';
import { Health11Component } from './human-development-content/health11/health11.component';
import { Health12Component } from './human-development-content/health12/health12.component';
import { Health13Component } from './human-development-content/health13/health13.component';
import { Health14Component } from './human-development-content/health14/health14.component';
import { AnnualRainfallComponent } from './annual-rainfall/annual-rainfall.component';
import { Health15Component } from './human-development-content/health15/health15.component';
import { Health16Component } from './human-development-content/health16/health16.component';
import { Health17Component } from './human-development-content/health17/health17.component';
import { Health18Component } from './human-development-content/health18/health18.component';
import { Health19Component } from './human-development-content/health19/health19.component';
import { Health20Component } from './human-development-content/health20/health20.component';
import { Health21Component } from './human-development-content/health21/health21.component';
import { Health22Component } from './human-development-content/health22/health22.component';
import { StateFinancesComponent } from './state-finances/state-finances.component';
import { EconomyOverviewComponent } from './economy-overview/economy-overview.component';
import { DemographicProfileComponent } from './economy-overview-content/demographic-profile/demographic-profile.component';
import { DemographicProfile2Component } from './economy-overview-content/demographic-profile2/demographic-profile2.component';
import { RegionalDisparityComponent } from './economy-overview-content/regional-disparity/regional-disparity.component';
import { InflationRatesComponent } from './economy-overview-content/inflation-rates/inflation-rates.component';
import { StateDomesticProduct1Component } from './economy-overview-content/state-domestic-product1/state-domestic-product1.component';
import { StateDomesticProduct2Component } from './economy-overview-content/state-domestic-product2/state-domestic-product2.component';
import { StateDomesticProduct3Component } from './economy-overview-content/state-domestic-product3/state-domestic-product3.component';
import { StateDomesticProduct4Component } from './economy-overview-content/state-domestic-product4/state-domestic-product4.component';
import { StateDomesticProduct5Component } from './economy-overview-content/state-domestic-product5/state-domestic-product5.component';
import { StateDomesticProduct6Component } from './economy-overview-content/state-domestic-product6/state-domestic-product6.component';
import { StateDomesticProduct7Component } from './economy-overview-content/state-domestic-product7/state-domestic-product7.component';
import { StateDomesticProduct8Component } from './economy-overview-content/state-domestic-product8/state-domestic-product8.component';
import { StateDomesticProduct9Component } from './economy-overview-content/state-domestic-product9/state-domestic-product9.component';
import { StateDomesticProduct10Component } from './economy-overview-content/state-domestic-product10/state-domestic-product10.component';
import { StateDomesticProduct11Component } from './economy-overview-content/state-domestic-product11/state-domestic-product11.component';
import { FiscalPerformance1Component } from './state-finances-content/fiscal-performance1/fiscal-performance1.component';
import { FiscalPerformance2Component } from './state-finances-content/fiscal-performance2/fiscal-performance2.component';
import { DeficitManagement1Component } from './state-finances-content/deficit-management1/deficit-management1.component';
import { DeficitManagement2Component } from './state-finances-content/deficit-management2/deficit-management2.component';
import { DeficitManagement3Component } from './state-finances-content/deficit-management3/deficit-management3.component';
import { DeficitManagement4Component } from './state-finances-content/deficit-management4/deficit-management4.component';
import { DebtManagement1Component } from './state-finances-content/debt-management1/debt-management1.component';
import { DebtManagement2Component } from './state-finances-content/debt-management2/debt-management2.component';
import { DebtManagement3Component } from './state-finances-content/debt-management3/debt-management3.component';
import { DebtManagement4Component } from './state-finances-content/debt-management4/debt-management4.component';
import { TaxGSDPRatioComponent } from './state-finances-content/tax-gsdp-ratio/tax-gsdp-ratio.component';
import { RevenueAccount1Component } from './state-finances-content/revenue-account1/revenue-account1.component';
import { RevenueAccount2Component } from './state-finances-content/revenue-account2/revenue-account2.component';
import { RevenueAccount3Component } from './state-finances-content/revenue-account3/revenue-account3.component';
import { RevenueAccount4Component } from './state-finances-content/revenue-account4/revenue-account4.component';
import { RevenueAccount5Component } from './state-finances-content/revenue-account5/revenue-account5.component';
import { ResourceManagement1Component } from './state-finances-content/resource-management1/resource-management1.component';
import { ResourceManagement2Component } from './state-finances-content/resource-management2/resource-management2.component';
import { ResourceManagement3Component } from './state-finances-content/resource-management3/resource-management3.component';
import { ResourceManagement4Component } from './state-finances-content/resource-management4/resource-management4.component';
import { ResourceManagement5Component } from './state-finances-content/resource-management5/resource-management5.component';
import { ResourceManagement6Component } from './state-finances-content/resource-management6/resource-management6.component';
import { ResourceManagement7Component } from './state-finances-content/resource-management7/resource-management7.component';
import { ResourceManagement8Component } from './state-finances-content/resource-management8/resource-management8.component';
import { ResourceManagement9Component } from './state-finances-content/resource-management9/resource-management9.component';
import { ResourceManagement10Component } from './state-finances-content/resource-management10/resource-management10.component';
import { ResourceManagement11Component } from './state-finances-content/resource-management11/resource-management11.component';
import { ResourceManagement12Component } from './state-finances-content/resource-management12/resource-management12.component';
import { ResourceManagement13Component } from './state-finances-content/resource-management13/resource-management13.component';
import { ResourceManagement14Component } from './state-finances-content/resource-management14/resource-management14.component';
import { TaxDepartment1Component } from './state-finances-content/tax-department1/tax-department1.component';
import { TaxDepartment2Component } from './state-finances-content/tax-department2/tax-department2.component';
import { TaxDepartment3Component } from './state-finances-content/tax-department3/tax-department3.component';
import { TaxDepartment4Component } from './state-finances-content/tax-department4/tax-department4.component';
import { TaxDepartment5Component } from './state-finances-content/tax-department5/tax-department5.component';
import { FinancialPosition1Component } from './state-finances-content/financial-position1/financial-position1.component';
import { EnterprisesComponent } from './enterprises/enterprises.component';
import { AnnualSurvey1Component } from './enterprises-content/annual-survey1/annual-survey1.component';
import { AnnualSurvey2Component } from './enterprises-content/annual-survey2/annual-survey2.component';
import { AnnualSurvey3Component } from './enterprises-content/annual-survey3/annual-survey3.component';
import { AnnualSurvey4Component } from './enterprises-content/annual-survey4/annual-survey4.component';
import { AnnualSurvey5Component } from './enterprises-content/annual-survey5/annual-survey5.component';
import { AnnualSurvey6Component } from './enterprises-content/annual-survey6/annual-survey6.component';
import { AnnualSurvey7Component } from './enterprises-content/annual-survey7/annual-survey7.component';
import { SupportInstitutions1Component } from './enterprises-content/support-institutions1/support-institutions1.component';
import { SupportInstitutions2Component } from './enterprises-content/support-institutions2/support-institutions2.component';
import { SupportInstitutions3Component } from './enterprises-content/support-institutions3/support-institutions3.component';
import { SupportInstitutions4Component } from './enterprises-content/support-institutions4/support-institutions4.component';
import { AgroBasedIndustries1Component } from './enterprises-content/agro-based-industries1/agro-based-industries1.component';
import { AgroBasedIndustries2Component } from './enterprises-content/agro-based-industries2/agro-based-industries2.component';
import { AgroBasedIndustries3Component } from './enterprises-content/agro-based-industries3/agro-based-industries3.component';
import { AgroBasedIndustries4Component } from './enterprises-content/agro-based-industries4/agro-based-industries4.component';
import { AgroBasedIndustries5Component } from './enterprises-content/agro-based-industries5/agro-based-industries5.component';
import { NonAgroBasedIndustries1Component } from './enterprises-content/non-agro-based-industries1/non-agro-based-industries1.component';
import { NonAgroBasedIndustries2Component } from './enterprises-content/non-agro-based-industries2/non-agro-based-industries2.component';
import { NonAgroBasedIndustries3Component } from './enterprises-content/non-agro-based-industries3/non-agro-based-industries3.component';
import { NonAgroBasedIndustries4Component } from './enterprises-content/non-agro-based-industries4/non-agro-based-industries4.component';
import { NonAgroBasedIndustries5Component } from './enterprises-content/non-agro-based-industries5/non-agro-based-industries5.component';
import { SixthEconomicCensus1Component } from './enterprises-content/sixth-economic-census1/sixth-economic-census1.component';
import { SixthEconomicCensus2Component } from './enterprises-content/sixth-economic-census2/sixth-economic-census2.component';
import { BiharIndustrialInvestment1Component } from './enterprises-content/bihar-industrial-investment1/bihar-industrial-investment1.component';
import { BiharIndustrialInvestment2Component } from './enterprises-content/bihar-industrial-investment2/bihar-industrial-investment2.component';
import { BiharStartUpPolicyComponent } from './enterprises-content/bihar-start-up-policy/bihar-start-up-policy.component';
import { Tourism1Component } from './enterprises-content/tourism1/tourism1.component';
import { Tourism2Component } from './enterprises-content/tourism2/tourism2.component';
import { MiningAndQuarryingComponent } from './enterprises-content/mining-and-quarrying/mining-and-quarrying.component';

import { ExpenditureManagementComponent } from './state-finances-content/expenditure-management/expenditure-management.component';

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
        path: 'human-development',
        component: HumanDevelopmentComponent
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
        component: Land1Component
     },
     
     {
        path: 'land2',
        component: LandComponent
     },
     {
        path: 'irrigation1',
        component: Irrigation1Component
     },
     {
        path: 'irrigation2',
        component: Irrigation2Component
     },
     {
        path: 'irrigation3',
        component: Irrigation3Component
     },
     {
        path: 'irrigation4',
        component: Irrigation4Component
     },
     {
        path: 'irrigation5',
        component: Irrigation5Component
     },
     {
        path: 'irrigation6',
        component: Irrigation6Component
     },
     {
        path: 'cropping-pattern',
        component: CroppingPatternComponent
     },
     {
        path: 'agricultural-credit1',
        component: AgriculturalCredit1Component
     },
     {
        path: 'agricultural-credit2',
        component: AgriculturalCredit2Component
     },
     {
        path: 'production-productivity1',
        component: ProductionProductivity1Component
     },
     {
        path: 'production-productivity2',
        component: ProductionProductivity2Component
     },
     {
        path: 'production-productivity3',
        component: ProductionProductivity3Component
     },
     {
        path: 'production-productivity4',
        component: ProductionProductivity4Component
     },
     {
        path: 'production-productivity5',
        component: ProductionProductivity5Component
     },
     {
        path: 'production-productivity6',
        component: ProductionProductivity6Component
     },
     {
        path: 'production-productivity7',
        component: ProductionProductivity7Component
     },
     {
        path: 'production-productivity8',
        component: ProductionProductivity8Component
     },
     {
        path: 'production-productivity9',
        component: ProductionProductivity9Component
     },
     {
        path: 'production-productivity10',
        component: ProductionProductivity10Component
     },
     {
        path: 'production-productivity11',
        component: ProductionProductivity11Component
     },
     {
        path: 'production-productivity12',
        component: ProductionProductivity12Component
     },
     {
        path: 'agricultural-inputs1',
        component: AgriculturalInputs1Component
     },
     {
        path: 'agricultural-inputs2',
        component: AgriculturalInputs2Component
     },
     {
        path: 'agricultural-inputs3',
        component: AgriculturalInputs3Component
     },
     {
        path: 'agricultural-inputs4',
        component: AgriculturalInputs4Component
     },
     {
        path: 'agricultural-inputs5',
        component: AgriculturalInputs5Component
     },
     {
        path: 'agricultural-inputs6',
        component: AgriculturalInputs6Component
     },
    //  {
    //     path: 'agricultural-inputs7',
    //     component: AgriculturalInputs7Component
    //  },
    //  {
    //     path: 'agricultural-inputs8',
    //     component: AgriculturalInputs8Component
    //  },
     {
        path: 'animal-husbandry1',
        component: AnimalHusbandry1Component
     },
     {
        path: 'animal-husbandry2',
        component: AnimalHusbandry2Component
     },
     {
        path: 'animal-husbandry3',
        component: AnimalHusbandry3Component
     },
     {
        path: 'animal-husbandry4',
        component: AnimalHusbandry4Component
     },
     {
        path: 'animal-husbandry5',
        component: AnimalHusbandry5Component
     },
     {
        path: 'animal-husbandry6',
        component: AnimalHusbandry6Component
     },
     {
        path: 'health1',
        component: Health1Component
     },
     {
        path: 'health2',
        component: Health2Component
     },
     {
        path: 'health3',
        component: Health3Component
     },
     {
        path: 'health4',
        component: Health4Component
     },
     {
        path: 'health5',
        component: Health5Component
     },
     {
        path: 'health6',
        component: Health6Component
     },
     {
        path: 'health7',
        component: Health7Component
     },
     {
        path: 'health8',
        component: Health8Component
     },
     {
        path: 'health9',
        component: Health9Component
     },
     {
        path: 'health10',
        component: Health10Component
     },
     {
        path: 'health11',
        component: Health11Component
     },
     {
        path: 'health12',
        component: Health12Component
     },
     {
        path: 'health13',
        component: Health13Component
     },
     {
        path: 'health14',
        component: Health14Component
     },
     {
        path: 'health15',
        component: Health15Component
     },
     {
        path: 'health16',
        component: Health16Component
     },
     {
        path: 'health17',
        component: Health17Component
     },
     {
        path: 'health18',
        component: Health18Component
     },
     {
        path: 'health19',
        component: Health19Component
     },
     {
        path: 'health20',
        component: Health20Component
     },
     {
        path: 'health21',
        component: Health21Component
     },
     {
        path: 'health22',
        component: Health22Component
     },
     {
        path: 'annualrainfall',
        component: AnnualRainfallComponent
     },
     {
        path: 'State-Finances',
        component: StateFinancesComponent
     },
     {
        path: 'Economy-Overview',
        component: EconomyOverviewComponent
     },
     {
        path: 'Economy-Overview/Demographic-Profile',
        component: DemographicProfileComponent
     },
     {
        path: 'Economy-Overview/Demographic-Profile2',
        component: DemographicProfile2Component
     },
     {
        path: 'Regional-Disparity',
        component: RegionalDisparityComponent
     },
     {
        path: 'Economy-Overview/Inflation-Rates',
        component: InflationRatesComponent
     },
     {
        path: 'Economy-Overview/State-Domestic-Product1',
        component: StateDomesticProduct1Component
     },
     {
        path: 'Economy-Overview/State-Domestic-Product2',
        component: StateDomesticProduct2Component
     },
     {
        path: 'Economy-Overview/State-Domestic-Product3',
        component: StateDomesticProduct3Component
     },
     {
        path: 'Economy-Overview/State-Domestic-Product4',
        component: StateDomesticProduct4Component
     },
     {
        path: 'Economy-Overview/State-Domestic-Product5',
        component: StateDomesticProduct5Component
     },
     {
        path: 'Economy-Overview/State-Domestic-Product6',
        component: StateDomesticProduct6Component
     },
     {
        path: 'Economy-Overview/State-Domestic-Product7',
        component: StateDomesticProduct7Component
     },
     {
        path: 'Economy-Overview/State-Domestic-Product8',
        component: StateDomesticProduct8Component
     },
     {
        path: 'Economy-Overview/State-Domestic-Product9',
        component: StateDomesticProduct9Component
     },
     {
        path: 'Economy-Overview/State-Domestic-Product10',
        component: StateDomesticProduct10Component
     },
     {
        path: 'Economy-Overview/State-Domestic-Product11',
        component: StateDomesticProduct11Component
     },
     {
        path: 'Fiscal-Performance1',
        component: FiscalPerformance1Component
     },
     {
        path: 'Fiscal-Performance2',
        component: FiscalPerformance2Component
     },
     {
        path: 'DeficitManagement1',
        component: DeficitManagement1Component
     },
     {
        path: 'DeficitManagement2',
        component: DeficitManagement2Component
     },
     {
        path: 'DeficitManagement3',
        component: DeficitManagement3Component
     },
     {
        path: 'DeficitManagement4',
        component: DeficitManagement4Component
     },
     {
        path: 'DebtManagement1',
        component: DebtManagement1Component
     },
     {
        path: 'DebtManagement2',
        component: DebtManagement2Component
     },
     {
        path: 'DebtManagement3',
        component: DebtManagement3Component
     },
     {
        path: 'DebtManagement4',
        component: DebtManagement4Component
     },
     {
        path: 'TaxGSDPRatio',
        component: TaxGSDPRatioComponent
     },
     {
        path: 'RevenueAccount1',
        component: RevenueAccount1Component
     },
     {
        path: 'RevenueAccount2',
        component: RevenueAccount2Component
     },
     {
        path: 'RevenueAccount3',
        component: RevenueAccount3Component
     },
     {
        path: 'RevenueAccount4',
        component: RevenueAccount4Component
     },
     {
        path: 'RevenueAccount5',
        component: RevenueAccount5Component
     },
     {
        path: 'ResourceManagement1',
        component: ResourceManagement1Component
     },
     {
        path: 'ResourceManagement2',
        component: ResourceManagement2Component
     },
     {
        path: 'ResourceManagement3',
        component: ResourceManagement3Component
     },
     {
        path: 'ResourceManagement4',
        component: ResourceManagement4Component
     },
     {
        path: 'ResourceManagement5',
        component: ResourceManagement5Component
     },
     {
        path: 'ResourceManagement6',
        component: ResourceManagement6Component
     },
     {
        path: 'ResourceManagement7',
        component: ResourceManagement7Component
     },
     {
        path: 'ResourceManagement8',
        component: ResourceManagement8Component
     },
     {
        path: 'ResourceManagement9',
        component: ResourceManagement9Component
     },
     {
        path: 'ResourceManagement10',
        component: ResourceManagement10Component
     },
     {
        path: 'ResourceManagement11',
        component: ResourceManagement11Component
     },
     {
        path: 'ResourceManagement12',
        component: ResourceManagement12Component
     },
     {
        path: 'ResourceManagement13',
        component: ResourceManagement13Component
     },
     {
        path: 'ResourceManagement14',
        component: ResourceManagement14Component
     },

     {
        path: 'TaxDepartment1',
        component: TaxDepartment1Component
     },
     {
        path: 'TaxDepartment2',
        component: TaxDepartment2Component
     },
     {
        path: 'TaxDepartment3',
        component: TaxDepartment3Component
     },
     {
        path: 'TaxDepartment4',
        component: TaxDepartment4Component
     },
     {
        path: 'TaxDepartment5',
        component: TaxDepartment5Component
     }, 

     {
        path: 'FinancialPosition1',
        component: FinancialPosition1Component
     },
<<<<<<< HEAD

     {
        path: 'ExpenditureManagement',
        component: ExpenditureManagementComponent
     },
     
=======
     {
        path: 'Enterprises-Sector',
        component: EnterprisesComponent
     },
     {
        path: 'Enterprises-Sector/AnnualSurvey1',
        component: AnnualSurvey1Component
     },
     {
        path: 'Enterprises-Sector/AnnualSurvey2',
        component: AnnualSurvey2Component
     },
     {
        path: 'Enterprises-Sector/AnnualSurvey3',
        component: AnnualSurvey3Component
     },
     {
        path: 'Enterprises-Sector/AnnualSurvey4',
        component: AnnualSurvey4Component
     },
     {
        path: 'Enterprises-Sector/AnnualSurvey5',
        component: AnnualSurvey5Component
     },
     {
        path: 'Enterprises-Sector/AnnualSurvey6',
        component: AnnualSurvey6Component
     },
     {
        path: 'Enterprises-Sector/AnnualSurvey7',
        component: AnnualSurvey7Component
     },
     {
        path: 'Enterprises-Sector/SupportInstitutions1',
        component: SupportInstitutions1Component
     },
     {
        path: 'Enterprises-Sector/SupportInstitutions2',
        component: SupportInstitutions2Component
     },
     {
        path: 'Enterprises-Sector/SupportInstitutions3',
        component: SupportInstitutions3Component
     },
     {
        path: 'Enterprises-Sector/SupportInstitutions4',
        component: SupportInstitutions4Component
     },
     {
        path: 'Enterprises-Sector/AgroBasedIndustries1',
        component: AgroBasedIndustries1Component
     },
     {
        path: 'Enterprises-Sector/AgroBasedIndustries2',
        component: AgroBasedIndustries2Component
     },
     {
        path: 'Enterprises-Sector/AgroBasedIndustries3',
        component: AgroBasedIndustries3Component
     },
     {
        path: 'Enterprises-Sector/AgroBasedIndustries4',
        component: AgroBasedIndustries4Component
     },
     {
        path: 'Enterprises-Sector/AgroBasedIndustries5',
        component: AgroBasedIndustries5Component
     },
     {
        path: 'Enterprises-Sector/NonAgroBasedIndustries1',
        component: NonAgroBasedIndustries1Component
     },
     {
        path: 'Enterprises-Sector/NonAgroBasedIndustries2',
        component: NonAgroBasedIndustries2Component
     },
     {
        path: 'Enterprises-Sector/NonAgroBasedIndustries3',
        component: NonAgroBasedIndustries3Component
     },
     {
        path: 'Enterprises-Sector/NonAgroBasedIndustries4',
        component: NonAgroBasedIndustries4Component
     },
     {
        path: 'Enterprises-Sector/NonAgroBasedIndustries5',
        component: NonAgroBasedIndustries5Component
     },
     {
        path: 'Enterprises-Sector/SixthEconomicCensus1',
        component: SixthEconomicCensus1Component
     },
     {
        path: 'Enterprises-Sector/SixthEconomicCensus2',
        component: SixthEconomicCensus2Component
     },
     {
        path: 'Enterprises-Sector/BiharIndustrialInvestment1',
        component: BiharIndustrialInvestment1Component
     },
     {
        path: 'Enterprises-Sector/BiharIndustrialInvestment2',
        component: BiharIndustrialInvestment2Component
     },
     {
        path: 'Enterprises-Sector/Bihar-Start-Up-Policy',
        component: BiharStartUpPolicyComponent
     },
     {
        path: 'Enterprises-Sector/Tourism1',
        component: Tourism1Component
     },
     {
        path: 'Enterprises-Sector/Tourism2',
        component: Tourism2Component
     },
     {
        path: 'Enterprises-Sector/Mining-And-Quarrying',
        component: MiningAndQuarryingComponent
     },
>>>>>>> 95a297c3bf4e0d01f82d414006f311a37dd9714c
];
