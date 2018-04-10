import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RateEnquiryComponent } from '../rateEnquiry/rateEnquiry.component';
import { IRateModal } from '../rateEnquiry/IRateModal';

@Injectable()
export class ModalServices {
    constructor(private http: Http, private modalService: NgbModal) { }
    open() {
        this.modalService.open(RateEnquiryComponent, {
            backdrop: 'static',
            keyboard: false,
            size: 'lg'
        });
    }
}