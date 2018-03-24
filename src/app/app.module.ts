import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { CareersComponent } from './careers/careers.component';
import { AboutUsComponent } from './about-us/about.component';
import { ContactComponent } from './contact-us/contact.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { SearchComponent } from './search/search.component';
import { AgentNetworkComponent } from './agent_network/agentNetwork.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    CareersComponent,
    AboutUsComponent,
    ContactComponent,
    NewsEventsComponent,
    SearchComponent,
    AgentNetworkComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
