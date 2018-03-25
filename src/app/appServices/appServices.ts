import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RateEnquiryComponent } from '../rateEnquiry/rateEnquiry.component';

@Injectable()
export class AppServices {
    customTabButtons: boolean = false;
    constructor(private http: Http, private modalService: NgbModal) { }

    open() {
        this.modalService.open(RateEnquiryComponent, {
            backdrop: 'static',
            keyboard: false,
            size: 'lg'
        });
    }
}