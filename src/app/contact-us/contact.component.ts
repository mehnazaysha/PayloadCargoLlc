import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppHttpServices } from '../appServices/appHttpServices';

@Component({
    moduleId: "ContactComponent",
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    name: string = '';
    phone: string = '';
    email: string = '';
    message: string = '';
    failedEmail: boolean = false;

    constructor(private appService: AppHttpServices, private router: Router) { }

    open(content) {
        this.failedEmail = false;
        this.appService.sendEmail(this.name, this.phone, this.email, this.message).subscribe(res => {
            this.router.navigate(['/home']);
        }, error => {
            this.failedEmail = true;
            console.log('AppComponent Error', error);
        });
    }
}