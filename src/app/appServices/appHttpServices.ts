import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { IRateModal } from '../rateEnquiry/IRateModal';

@Injectable()
export class AppHttpServices {
    private emailUrl = './assets/contact_mail_form.php';
    private rateUrl = './assets/rate_mail_form.php';


    constructor(private http: Http) { }

    sendEmail(name: string, phone: string, email: string, message: string): any {
        let body = {
            name: name,
            phone: phone,
            email: email,
            message: message
        };

        return this.http.post(this.emailUrl, JSON.stringify(body)).map(response => {
            return response;
        });
    }

    rateEnquiry(rate: IRateModal): any {
        return this.http.post(this.rateUrl, JSON.stringify(rate)).map(response => {
            return response;
        })
    }

}