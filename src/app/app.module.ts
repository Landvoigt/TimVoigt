import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DescriptionComponent } from './description/description.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FirstProjectComponent } from './first-project/first-project.component';
import { SecondProjectComponent } from './second-project/second-project.component';
import { ThirdProjectComponent } from './third-project/third-project.component';
import { ForthProjectComponent } from './forth-project/forth-project.component';
import { FifthProjectComponent } from './fifth-project/fifth-project.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    DescriptionComponent,
    SkillsComponent,
    PortfolioComponent,
    FirstProjectComponent,
    SecondProjectComponent,
    ThirdProjectComponent,
    ForthProjectComponent,
    FifthProjectComponent,
    ContactComponent,
    FooterComponent,
    MobileMenuComponent,
    ImprintComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
