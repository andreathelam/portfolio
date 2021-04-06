import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GrowComponent } from './grow/grow.component';
import { HomeComponent } from './home/home.component';
import { ProjectcupidComponent } from './projectcupid/projectcupid.component';
import { StardewjournalComponent } from './stardewjournal/stardewjournal.component';
import { Surviving2020Component } from './surviving2020/surviving2020.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'grow', component: GrowComponent },
  { path: 'surviving2020', component: Surviving2020Component },
  { path: 'project-cupid', component: ProjectcupidComponent },
  { path: 'stardew-journal', component: StardewjournalComponent }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload'
};

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes, {anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
