import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

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
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { RateEnquiryComponent } from './rateEnquiry/rateEnquiry.component';
import { ModalServices } from './appServices/modalServices';
import { AppHttpServices } from './appServices/appHttpServices';


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
    AgentNetworkComponent,
    PrivacyComponent,
    TermsComponent,
    RateEnquiryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  entryComponents: [RateEnquiryComponent],
  providers: [ModalServices, AppHttpServices, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
