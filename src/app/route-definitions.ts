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
     }
];
