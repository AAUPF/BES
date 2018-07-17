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
