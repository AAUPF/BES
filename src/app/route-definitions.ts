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
import { ExpenditureManagementComponent } from './state-finances-content/expenditure-management/expenditure-management.component';
import { ExpenditureManagement1Component } from './state-finances-content/expenditure-management1/expenditure-management1.component';
import { ExpenditureManagement2Component } from './state-finances-content/expenditure-management2/expenditure-management2.component';

import { ExpenditureManagement3Component } from './state-finances-content/expenditure-management3/expenditure-management3.component';

import { RevenueExpenditureComponent } from './state-finances-content/revenue-expenditure/revenue-expenditure.component';

import { ExpenditureOnSalaryAndPensionComponent } from './state-finances-content/expenditure-on-salary-and-pension/expenditure-on-salary-and-pension.component';
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
import { TaxDepartment6Component } from './state-finances-content/tax-department6/tax-department6.component';
import { StatePublicSector1Component } from './state-finances-content/state-public-sector1/state-public-sector1.component';
import { StatePublicSector2Component } from './state-finances-content/state-public-sector2/state-public-sector2.component';
import { StatePublicSector3Component } from './state-finances-content/state-public-sector3/state-public-sector3.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { Roads1Component } from './infrastructure-content/roads1/roads1.component';
import { Roads2Component } from './infrastructure-content/roads2/roads2.component';
import { Roads3Component } from './infrastructure-content/roads3/roads3.component';
import { Roads4Component } from './infrastructure-content/roads4/roads4.component';
import { Roads5Component } from './infrastructure-content/roads5/roads5.component';
import { Roads6Component } from './infrastructure-content/roads6/roads6.component';
import { Roads7Component } from './infrastructure-content/roads7/roads7.component';
import { Roads8Component } from './infrastructure-content/roads8/roads8.component';
import { Roads9Component } from './infrastructure-content/roads9/roads9.component';
import { Roads10Component } from './infrastructure-content/roads10/roads10.component';
import { BridgeSector1Component } from './infrastructure-content/bridge-sector1/bridge-sector1.component';
import { BridgeSector2Component } from './infrastructure-content/bridge-sector2/bridge-sector2.component';
import { RoadTransport1Component } from './infrastructure-content/road-transport1/road-transport1.component';
import { RoadTransport2Component } from './infrastructure-content/road-transport2/road-transport2.component';
import { RoadTransport3Component } from './infrastructure-content/road-transport3/road-transport3.component';
import { RoadTransport4Component } from './infrastructure-content/road-transport4/road-transport4.component';
import { RailwaysComponent } from './infrastructure-content/railways/railways.component';
import { AirwaysComponent } from './infrastructure-content/airways/airways.component';
import { Irrigation7Component } from './infrastructure-content/irrigation7/irrigation7.component';
import { ICT1Component } from './infrastructure-content/ict1/ict1.component';
import { ICT2Component } from './infrastructure-content/ict2/ict2.component';
import { ICT3Component } from './infrastructure-content/ict3/ict3.component';
import { ICT4Component } from './infrastructure-content/ict4/ict4.component';
import { ICT5Component } from './infrastructure-content/ict5/ict5.component';
import { EnergyComponent } from './energy/energy.component';
import { AvailablilityOfPower1Component } from './energy-content/availablility-of-power1/availablility-of-power1.component';
import { AvailablilityOfPower2Component } from './energy-content/availablility-of-power2/availablility-of-power2.component';
import { InstitutionalStructureOfPowerSectorComponent } from './energy-content/institutional-structure-of-power-sector/institutional-structure-of-power-sector.component';
import { OperationalAndFinancialStatus1Component } from './energy-content/operational-and-financial-status1/operational-and-financial-status1.component';
import { OperationalAndFinancialStatus2Component } from './energy-content/operational-and-financial-status2/operational-and-financial-status2.component';
import { Transmission1Component } from './energy-content/transmission1/transmission1.component';
import { Transmission2Component } from './energy-content/transmission2/transmission2.component';
import { BiharRenewableEnergyComponent } from './energy-content/bihar-renewable-energy/bihar-renewable-energy.component';
import { ProjectionOfPowerRequirement1Component } from './energy-content/projection-of-power-requirement1/projection-of-power-requirement1.component';
import { ProjectionOfPowerRequirement2Component } from './energy-content/projection-of-power-requirement2/projection-of-power-requirement2.component';
import { ProjectionOfPowerRequirement3Component } from './energy-content/projection-of-power-requirement3/projection-of-power-requirement3.component';
import { ProjectionOfPowerRequirement4Component } from './energy-content/projection-of-power-requirement4/projection-of-power-requirement4.component';
import { ProjectionOfPowerRequirement5Component } from './energy-content/projection-of-power-requirement5/projection-of-power-requirement5.component';
import { DistributionComponent } from './energy-content/distribution/distribution.component';
import { ProgrammesForElectrification1Component } from './energy-content/programmes-for-electrification1/programmes-for-electrification1.component';
import { ProgrammesForElectrification2Component } from './energy-content/programmes-for-electrification2/programmes-for-electrification2.component';
import { Generation1Component } from './energy-content/generation1/generation1.component';
import { Generation2Component } from './energy-content/generation2/generation2.component';
import { RuralDevelopmentComponent } from './rural-development/rural-development.component';
import { Poverty1Component } from './rural-development-content/poverty1/poverty1.component';
import { Poverty2Component } from './rural-development-content/poverty2/poverty2.component';
import { PanchayatiRaj1Component } from './rural-development-content/panchayati-raj1/panchayati-raj1.component';
import { PanchayatiRaj2Component } from './rural-development-content/panchayati-raj2/panchayati-raj2.component';
import { DisasterManagement1Component } from './rural-development-content/disaster-management1/disaster-management1.component';
import { RuralDevelopmentProgrammes1Component } from './rural-development-content/rural-development-programmes1/rural-development-programmes1.component';
import { RuralDevelopmentProgrammes2Component } from './rural-development-content/rural-development-programmes2/rural-development-programmes2.component';
import { RuralDevelopmentProgrammes3Component } from './rural-development-content/rural-development-programmes3/rural-development-programmes3.component';
import { RuralDevelopmentProgrammes4Component } from './rural-development-content/rural-development-programmes4/rural-development-programmes4.component';
import { RuralDevelopmentProgrammes5Component } from './rural-development-content/rural-development-programmes5/rural-development-programmes5.component';
import { RuralDevelopmentProgrammes6Component } from './rural-development-content/rural-development-programmes6/rural-development-programmes6.component';
import { RuralDevelopmentProgrammes7Component } from './rural-development-content/rural-development-programmes7/rural-development-programmes7.component';
import { RuralDevelopmentProgrammes8Component } from './rural-development-content/rural-development-programmes8/rural-development-programmes8.component';
import { RuralDevelopmentProgrammes9Component } from './rural-development-content/rural-development-programmes9/rural-development-programmes9.component';
import { RuralDevelopmentProgrammes10Component } from './rural-development-content/rural-development-programmes10/rural-development-programmes10.component';
import { DistributionOfHomesteadLand1Component } from './rural-development-content/distribution-of-homestead-land1/distribution-of-homestead-land1.component';
import { DistributionOfHomesteadLand2Component } from './rural-development-content/distribution-of-homestead-land2/distribution-of-homestead-land2.component';
import { RuralDevelopmentProgrammes11Component } from './rural-development-content/rural-development-programmes11/rural-development-programmes11.component';
import { DistrictWiseIndiaMapComponent } from './district-wise-india-map/district-wise-india-map.component';



export const appRoutes: Routes = [
    {
        path: 'ExpenditureOnSalaryAndPension',
        component: ExpenditureOnSalaryAndPensionComponent
     },


    {
        path: 'RevenueExpenditure',
        component: RevenueExpenditureComponent
     },

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
     {
        path: 'ExpenditureManagement',
        component: ExpenditureManagementComponent
     },
     {
        path: 'ExpenditureManagement1',
        component: ExpenditureManagement1Component
     },

     {
        path: 'ExpenditureManagement2',
        component: ExpenditureManagement2Component
     },
     

     {
        path: 'ExpenditureManagement3',
        component: ExpenditureManagement3Component
     },
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
     {
        path: 'StatePublicSector1',
        component: StatePublicSector1Component
     },
     {
        path: 'StatePublicSector2',
        component: StatePublicSector2Component
     },
     {
        path: 'StatePublicSector3',
        component: StatePublicSector3Component
     },
     {
        path: 'TaxDepartment6',
        component: TaxDepartment6Component
     },
     {
        path: 'Infrastructure',
        component: InfrastructureComponent
     },
     {
        path: 'Roads1',
        component: Roads1Component
     },
     {
        path: 'Roads2',
        component: Roads2Component
     },
     {
        path: 'Roads3',
        component: Roads3Component
     },
     {
        path: 'Roads4',
        component: Roads4Component
     },
     {
        path: 'Roads5',
        component: Roads5Component
     },
     {
        path: 'Roads6',
        component: Roads6Component
     },
     {
        path: 'Roads7',
        component: Roads7Component
     },
     {
        path: 'Roads8',
        component: Roads8Component
     },
     {
        path: 'Roads9',
        component: Roads9Component
     },
     {
        path: 'Roads10',
        component: Roads10Component
     },
     {
        path: 'BridgeSector1',
        component: BridgeSector1Component
     },
     {
        path: 'BridgeSector2',
        component: BridgeSector2Component
     },
     {
        path: 'RoadTransport1',
        component: RoadTransport1Component
     },
     {
        path: 'RoadTransport2',
        component: RoadTransport2Component
     },
     {
        path: 'RoadTransport3',
        component: RoadTransport3Component
     },
     {
        path: 'RoadTransport4',
        component: RoadTransport4Component
     },
     {
        path: 'Railways',
        component: RailwaysComponent
     },
     {
        path: 'Airways',
        component: AirwaysComponent
     },
     {
        path: 'Irrigation7',
        component: Irrigation7Component
     },
     {
        path: 'ICT1',
        component: ICT1Component
     },
     {
        path: 'ICT2',
        component: ICT2Component
     },
     {
        path: 'ICT3',
        component: ICT3Component
     },
     {
        path: 'ICT4',
        component: ICT4Component
     },
     {
        path: 'ICT5',
        component: ICT5Component
     },
     {
        path: 'Energy',
        component: EnergyComponent
     },
     {
        path: 'AvailablilityOfPower1',
        component:AvailablilityOfPower1Component 
     },
     {
        path: 'AvailablilityOfPower2',
        component: AvailablilityOfPower2Component
     },
     {
        path: 'InstitutionalStructureOfPowerSector',
        component: InstitutionalStructureOfPowerSectorComponent
     },
     {
        path: 'OperationalAndFinancialStatus1',
        component: OperationalAndFinancialStatus1Component
     },
     {
        path: 'OperationalAndFinancialStatus2',
        component: OperationalAndFinancialStatus2Component
     },
     {
        path: 'Transmission1',
        component: Transmission1Component
     },
     {
        path: 'Transmission2',
        component: Transmission2Component
     },
     {
        path: 'BiharRenewableEnergy',
        component: BiharRenewableEnergyComponent
     },
     {
        path: 'ProjectionOfPowerRequirement1',
        component: ProjectionOfPowerRequirement1Component
     },
     {
        path: 'ProjectionOfPowerRequirement2',
        component: ProjectionOfPowerRequirement2Component
     },
     {
        path: 'ProjectionOfPowerRequirement3',
        component: ProjectionOfPowerRequirement3Component
     },
     {
        path: 'ProjectionOfPowerRequirement4',
        component: ProjectionOfPowerRequirement4Component
     },
     {
        path: 'ProjectionOfPowerRequirement5',
        component: ProjectionOfPowerRequirement5Component
     },
     {
        path: 'Distribution',
        component: DistributionComponent
     },
     {
        path: 'ProgrammesForElectrification1',
        component: ProgrammesForElectrification1Component
     },
     {
        path: 'ProgrammesForElectrification2',
        component: ProgrammesForElectrification2Component
     },
     {
        path: 'Generation1',
        component: Generation1Component
     },
     {
        path: 'Generation2',
        component: Generation2Component
     },
     {
        path: 'Rural-Development',
        component: RuralDevelopmentComponent
     },
     {
        path: 'Poverty1',
        component: Poverty1Component
     },
     {
        path: 'Poverty2',
        component: Poverty2Component
     },
     {
        path: 'PanchayatiRaj1',
        component: PanchayatiRaj1Component
     },
     {
        path: 'PanchayatiRaj2',
        component: PanchayatiRaj2Component
     },
     {
        path: 'DisasterManagement1',
        component: DisasterManagement1Component
     },
     {
        path: 'RuralDevelopmentProgrammes1',
        component: RuralDevelopmentProgrammes1Component
     },
     {
        path: 'RuralDevelopmentProgrammes2',
        component: RuralDevelopmentProgrammes2Component
     },
     {
        path: 'RuralDevelopmentProgrammes3',
        component: RuralDevelopmentProgrammes3Component
     },
     {
        path: 'RuralDevelopmentProgrammes4',
        component: RuralDevelopmentProgrammes4Component
     },
     {
        path: 'RuralDevelopmentProgrammes5',
        component: RuralDevelopmentProgrammes5Component
     },
     {
        path: 'RuralDevelopmentProgrammes6',
        component: RuralDevelopmentProgrammes6Component
     },
     {
        path: 'RuralDevelopmentProgrammes7',
        component: RuralDevelopmentProgrammes7Component
     },
     {
        path: 'RuralDevelopmentProgrammes8',
        component: RuralDevelopmentProgrammes8Component
     },
     {
        path: 'RuralDevelopmentProgrammes9',
        component: RuralDevelopmentProgrammes9Component
     },
     {
        path: 'RuralDevelopmentProgrammes10',
        component: RuralDevelopmentProgrammes10Component
     },
     {
        path: 'RuralDevelopmentProgrammes11',
        component: RuralDevelopmentProgrammes11Component
     },
     {
        path: 'DistributionOfHomesteadLand1',
        component: DistributionOfHomesteadLand1Component
     },
     {
        path: 'DistributionOfHomesteadLand2',
        component: DistributionOfHomesteadLand2Component
     },
     {
        path: 'DistrictWiseIndiaMap',
        component: DistrictWiseIndiaMapComponent
     },

     
];
