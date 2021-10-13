import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from './resume/resume.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'resume', component: ResumeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [ RouterModule ],
  // providers: [],
  // bootstrap: [AppComponent]
})
export class AppRoutingModule { }
