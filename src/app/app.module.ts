import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { QouteComponent } from './qoute/qoute.component';
import { SolutionComponent } from './solution/solution.component';
import { ActionComponent } from './action/action.component';
import { MilestoneComponent } from './milestone/milestone.component';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    NavComponent,
    WorkComponent,
    ContactComponent,
    TeamComponent,
    QouteComponent,
    SolutionComponent,
    ActionComponent,
    MilestoneComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
