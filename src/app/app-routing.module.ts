import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about.component';
import { CareersComponent } from './careers/careers.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact-us/contact.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { SearchComponent } from './search/search.component';
import { AgentNetworkComponent } from './agent_network/agentNetwork.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contactus', component: ContactComponent },
    { path: 'search', component: SearchComponent },
    { path: 'agent-network', component: AgentNetworkComponent },
    { path: 'news-events', component: NewsEventsComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'terms', component: TermsComponent },

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }