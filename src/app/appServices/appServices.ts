import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RateEnquiryComponent } from '../rateEnquiry/rateEnquiry.component';
import { IRateModal } from '../rateEnquiry/IRateModal';

@Injectable()
export class AppServices {
    private emailUrl = './assets/contact_mail_form.php';

    constructor(private http: Http, private modalService: NgbModal) { }

    open() {
        this.modalService.open(RateEnquiryComponent, {
            backdrop: 'static',
            keyboard: false,
            size: 'lg'
        });
    }

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
}