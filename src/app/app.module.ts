import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import {appRoutes} from './route-definitions';
import { TestComponent } from './test/test.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { ModalComponent } from './modal/modal.component';
import { SvgcomponentComponent } from './svgcomponent/svgcomponent.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FuncComponent } from './func/func.component';
import { AgriculturAlliedComponent } from './agricultur-allied/agricultur-allied.component';
import { LandComponent } from './land/land.component';
import { Rainfall2Component } from './rainfall2/rainfall2.component';
import { Land1Component } from './land1/land1.component';
import { Irrigation1Component } from './irrigation1/irrigation1.component';
import { Irrigation2Component } from './irrigation2/irrigation2.component';
import { Irrigation3Component } from './irrigation3/irrigation3.component';
import { Irrigation4Component } from './irrigation4/irrigation4.component';
import { Irrigation5Component } from './irrigation5/irrigation5.component';
import { Irrigation6Component } from './irrigation6/irrigation6.component';
import { CroppingPatternComponent } from './cropping-pattern/cropping-pattern.component';
import { AgriculturalCredit1Component } from './agricultural-credit1/agricultural-credit1.component';
import { AgriculturalCredit2Component } from './agricultural-credit2/agricultural-credit2.component';
import { ProductionProductivity1Component } from './production-productivity1/production-productivity1.component';
import { ProductionProductivity2Component } from './production-productivity2/production-productivity2.component';
import { ProductionProductivity3Component } from './production-productivity3/production-productivity3.component';
import { ProductionProductivity4Component } from './production-productivity4/production-productivity4.component';
import { ProductionProductivity5Component } from './production-productivity5/production-productivity5.component';
import { ProductionProductivity6Component } from './production-productivity6/production-productivity6.component';
import { ProductionProductivity7Component } from './production-productivity7/production-productivity7.component';
import { ProductionProductivity8Component } from './production-productivity8/production-productivity8.component';
import { ProductionProductivity9Component } from './production-productivity9/production-productivity9.component';
import { ProductionProductivity10Component } from './production-productivity10/production-productivity10.component';
import { ProductionProductivity11Component } from './production-productivity11/production-productivity11.component';
import { ProductionProductivity12Component } from './production-productivity12/production-productivity12.component';
import { AgriculturalInputs1Component } from './agricultural-inputs1/agricultural-inputs1.component';
import { AgriculturalInputs2Component } from './agricultural-inputs2/agricultural-inputs2.component';
import { AgriculturalInputs3Component } from './agricultural-inputs3/agricultural-inputs3.component';
import { AgriculturalInputs4Component } from './agricultural-inputs4/agricultural-inputs4.component';
import { AgriculturalInputs5Component } from './agricultural-inputs5/agricultural-inputs5.component';
import { AgriculturalInputs6Component } from './agricultural-inputs6/agricultural-inputs6.component';
//import { AgriculturalInputs7Component } from './agricultural-inputs7/agricultural-inputs7.component';
import { AnimalHusbandry1Component } from './animal-husbandry1/animal-husbandry1.component';
import { AnimalHusbandry2Component } from './animal-husbandry2/animal-husbandry2.component';
import { AnimalHusbandry3Component } from './animal-husbandry3/animal-husbandry3.component';
import { AnimalHusbandry4Component } from './animal-husbandry4/animal-husbandry4.component';
import { AnimalHusbandry5Component } from './animal-husbandry5/animal-husbandry5.component';
import { AnimalHusbandry6Component } from './animal-husbandry6/animal-husbandry6.component';
import { DistrictWiseComponent } from './district-wise/district-wise.component';
//import { AgriculturalInputs8Component } from './agricultural-inputs8/agricultural-inputs8.component';
import { ProductionProductivity13Component } from './production-productivity13/production-productivity13.component';
import { RainfallNewComponent } from './rainfall-new/rainfall-new.component';
import { HumanDevelopmentComponent } from './human-development/human-development.component';
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
import { RegionalDisparityComponent } from './economy-overview-content/regional-disparity/regional-disparity.component';
import { InflationRatesComponent } from './economy-overview-content/inflation-rates/inflation-rates.component';
import { StateDomesticProduct1Component } from './economy-overview-content/state-domestic-product1/state-domestic-product1.component';
import { StateDomesticProduct2Component } from './economy-overview-content/state-domestic-product2/state-domestic-product2.component';
import { StateDomesticProduct3Component } from './economy-overview-content/state-domestic-product3/state-domestic-product3.component';
import { DemographicProfile2Component } from './economy-overview-content/demographic-profile2/demographic-profile2.component';
import { StateDomesticProduct9Component } from './economy-overview-content/state-domestic-product9/state-domestic-product9.component';
import { StateDomesticProduct11Component } from './economy-overview-content/state-domestic-product11/state-domestic-product11.component';
import { StateDomesticProduct4Component } from './economy-overview-content/state-domestic-product4/state-domestic-product4.component';
import { StateDomesticProduct5Component } from './economy-overview-content/state-domestic-product5/state-domestic-product5.component';
import { StateDomesticProduct6Component } from './economy-overview-content/state-domestic-product6/state-domestic-product6.component';
import { StateDomesticProduct7Component } from './economy-overview-content/state-domestic-product7/state-domestic-product7.component';
import { StateDomesticProduct8Component } from './economy-overview-content/state-domestic-product8/state-domestic-product8.component';
import { StateDomesticProduct10Component } from './economy-overview-content/state-domestic-product10/state-domestic-product10.component';
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
import { FinancialPosition1Component } from './state-finances-content/financial-position1/financial-position1.component';
import { TaxDepartment1Component } from './state-finances-content/tax-department1/tax-department1.component';
import { TaxDepartment2Component } from './state-finances-content/tax-department2/tax-department2.component';
import { TaxDepartment3Component } from './state-finances-content/tax-department3/tax-department3.component';
import { TaxDepartment4Component } from './state-finances-content/tax-department4/tax-department4.component';
import { TaxDepartment5Component } from './state-finances-content/tax-department5/tax-department5.component';
import { ExpenditureManagementComponent } from './state-finances-content/expenditure-management/expenditure-management.component';
import { ExpenditureManagement1Component } from './state-finances-content/expenditure-management1/expenditure-management1.component';
import { ExpenditureManagement3Component } from './state-finances-content/expenditure-management3/expenditure-management3.component';
import { ExpenditureManagement2Component } from './state-finances-content/expenditure-management2/expenditure-management2.component';
import { RevenueExpenditureComponent } from './state-finances-content/revenue-expenditure/revenue-expenditure.component';
import { ExpenditureOnSalaryAndPensionComponent } from './state-finances-content/expenditure-on-salary-and-pension/expenditure-on-salary-and-pension.component';
import { QualityOfExpenditureComponent } from './state-finances-content/quality-of-expenditure/quality-of-expenditure.component';
import { appRoutes1 } from './nilay-routes';
import { SectoralExpenditureComponent } from './state-finances-content/sectoral-expenditure/sectoral-expenditure.component';
import { SectoralExpenditure1Component } from './state-finances-content/sectoral-expenditure1/sectoral-expenditure1.component';
import { SectoralExpenditure2Component } from './state-finances-content/sectoral-expenditure2/sectoral-expenditure2.component';
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
import { ComparisonOfBudgetComponent } from './state-finances-content/comparison-of-budget/comparison-of-budget.component';
import { ComparisonOfBudget1Component } from './state-finances-content/comparison-of-budget1/comparison-of-budget1.component';
import { TaxDepartment7Component } from './state-finances-content/tax-department7/tax-department7.component';
import { GoogleComponent } from './google/google.component';
import { MiningComponent } from './enterprises-content/mining/mining.component';
import { AgroBasedIndustries6Component } from './enterprises-content/agro-based-industries6/agro-based-industries6.component';
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
'./enterprises-content/agro-based-industries6/agro-based-industries6.component';
import { Tourism3Component } from './enterprises-content/tourism3/tourism3.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MaincontentComponent,
    TestComponent,
    AgricultureComponent,
    ModalComponent,
    SvgcomponentComponent,
    FuncComponent,
    AgriculturAlliedComponent,
    LandComponent,
    Rainfall2Component,
    Land1Component,
    Irrigation1Component,
    Irrigation2Component,
    Irrigation3Component,
    Irrigation4Component,
    Irrigation5Component,
    Irrigation6Component,
    CroppingPatternComponent,
    AgriculturalCredit1Component,
    AgriculturalCredit2Component,
    ProductionProductivity1Component,
    ProductionProductivity2Component,
    ProductionProductivity3Component,
    ProductionProductivity4Component,
    ProductionProductivity5Component,
    ProductionProductivity6Component,
    ProductionProductivity7Component,
    ProductionProductivity8Component,
    ProductionProductivity9Component,
    ProductionProductivity10Component,
    ProductionProductivity11Component,
    ProductionProductivity12Component,
    AgriculturalInputs1Component,
    AgriculturalInputs2Component,
    AgriculturalInputs3Component,
    AgriculturalInputs4Component,
    AgriculturalInputs5Component,
    AgriculturalInputs6Component,
    //AgriculturalInputs7Component,
    AnimalHusbandry1Component,
    AnimalHusbandry2Component,
    AnimalHusbandry3Component,
    AnimalHusbandry4Component,
    AnimalHusbandry5Component,
    AnimalHusbandry6Component,
    DistrictWiseComponent,
    //AgriculturalInputs8Component,
    ProductionProductivity13Component,
    RainfallNewComponent,
    HumanDevelopmentComponent,
    Health1Component,
    Health2Component,
    Health3Component,
    Health4Component,
    Health5Component,
    Health6Component,
    Health7Component,
    Health8Component,
    Health9Component,
    Health10Component,
    Health11Component,
    Health12Component,
    Health13Component,
    Health14Component,
    AnnualRainfallComponent,
    Health15Component,
    Health16Component,
    Health17Component,
    Health18Component,
    Health19Component,
    Health20Component,
    Health21Component,
    Health22Component,
    StateFinancesComponent,
    EconomyOverviewComponent,
    DemographicProfileComponent,
    RegionalDisparityComponent,
    InflationRatesComponent,
    StateDomesticProduct1Component,
    StateDomesticProduct2Component,
    StateDomesticProduct3Component,
    DemographicProfile2Component,
    StateDomesticProduct9Component,
    StateDomesticProduct11Component,
    StateDomesticProduct4Component,
    StateDomesticProduct5Component,
    StateDomesticProduct6Component,
    StateDomesticProduct7Component,
    StateDomesticProduct8Component,
    StateDomesticProduct10Component,
    FiscalPerformance1Component,
    FiscalPerformance2Component,
    DeficitManagement1Component,
    DeficitManagement2Component,
    DeficitManagement3Component,
    DeficitManagement4Component,
    DebtManagement1Component,
    DebtManagement2Component,
    DebtManagement3Component,
    DebtManagement4Component,
    TaxGSDPRatioComponent,
    RevenueAccount1Component,
    RevenueAccount2Component,
    RevenueAccount3Component,
    RevenueAccount4Component,
    RevenueAccount5Component,
    ResourceManagement1Component,
    ResourceManagement2Component,
    ResourceManagement3Component,
    ResourceManagement4Component,
    ResourceManagement5Component,
    ResourceManagement6Component,
    ResourceManagement7Component,
    ResourceManagement8Component,
    ResourceManagement9Component,
    ResourceManagement10Component,
    ResourceManagement11Component,
    ResourceManagement12Component,
    ResourceManagement13Component,
    ResourceManagement14Component,
    FinancialPosition1Component,
    TaxDepartment1Component,
    TaxDepartment2Component,
    TaxDepartment3Component,
    TaxDepartment4Component,
    TaxDepartment5Component,
    ExpenditureManagementComponent,
    ExpenditureManagement1Component,
    ExpenditureManagement2Component,
    ExpenditureManagement3Component,
    RevenueExpenditureComponent,
    ExpenditureOnSalaryAndPensionComponent,
    QualityOfExpenditureComponent,
    SectoralExpenditureComponent,
    SectoralExpenditure1Component,
    SectoralExpenditure2Component,
    EnterprisesComponent,
    AnnualSurvey1Component,
    AnnualSurvey2Component,
    AnnualSurvey3Component,
    AnnualSurvey4Component,
    AnnualSurvey5Component,
    AnnualSurvey6Component,
    AnnualSurvey7Component,
    SupportInstitutions1Component,
    SupportInstitutions2Component,
    SupportInstitutions3Component,
    SupportInstitutions4Component,
    AgroBasedIndustries1Component,
    AgroBasedIndustries2Component,
    AgroBasedIndustries3Component,
    AgroBasedIndustries4Component,
    AgroBasedIndustries5Component,
    NonAgroBasedIndustries1Component,
    NonAgroBasedIndustries2Component,
    NonAgroBasedIndustries3Component,
    NonAgroBasedIndustries4Component,
    NonAgroBasedIndustries5Component,
    SixthEconomicCensus1Component,
    SixthEconomicCensus2Component,
    BiharIndustrialInvestment1Component,
    BiharIndustrialInvestment2Component,
    BiharStartUpPolicyComponent,
    Tourism1Component,
    Tourism2Component,
    Tourism3Component,
    MiningAndQuarryingComponent,
    StatePublicSector1Component,
    StatePublicSector2Component,
    StatePublicSector3Component,
    TaxDepartment6Component,
    ComparisonOfBudgetComponent,
    ComparisonOfBudget1Component,
    TaxDepartment7Component,
    GoogleComponent,
    MiningComponent,
    AgroBasedIndustries6Component,
    InfrastructureComponent,
    Roads1Component,
    Roads2Component,
    Roads3Component,
    Roads4Component,
    Roads5Component,
    Roads6Component,
    Roads7Component,
    Roads8Component,
    Roads9Component,
    Roads10Component,
    BridgeSector1Component,
    BridgeSector2Component,
    RoadTransport1Component,
    RoadTransport2Component,
    RoadTransport3Component,
    RoadTransport4Component,
    RailwaysComponent,
    AirwaysComponent,
    Irrigation7Component,
    ICT1Component,
    ICT2Component,
    ICT3Component,
    ICT4Component,
    ICT5Component,
    
    
  
    ],
  imports: [
    BrowserModule,
    FormsModule,    
    RouterModule.forRoot(appRoutes),
    RouterModule.forRoot(appRoutes1),
    HttpModule,
    HttpClientModule,
    NgxSpinnerModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
