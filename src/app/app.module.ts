import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GrowComponent } from './grow/grow.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
//import { ContentsModule } from 'angular-contents';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { Surviving2020Component } from './surviving2020/surviving2020.component';
import { ProjectcupidComponent } from './projectcupid/projectcupid.component';
import { StardewjournalComponent } from './stardewjournal/stardewjournal.component';
import { ViewmoremenuComponent } from './viewmoremenu/viewmoremenu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GrowComponent,
    FooterComponent,
    SidenavComponent,
    AboutComponent,
    Surviving2020Component,
    ProjectcupidComponent,
    StardewjournalComponent,
    ViewmoremenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ContentsModule,
    NgxPageScrollModule,
    NgxPageScrollCoreModule,
    IvyCarouselModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
