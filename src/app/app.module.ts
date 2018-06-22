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
import { AgricultureComponent } from './agriculture/agriculture.component';
import { ModalComponent } from './modal/modal.component';
import { SvgcomponentComponent } from './svgcomponent/svgcomponent.component';
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
  
    ],
  imports: [
    BrowserModule,
    FormsModule,    
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
