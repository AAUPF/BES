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
  
    ],
  imports: [
    BrowserModule,
    FormsModule,    
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule,
    NgxSpinnerModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
