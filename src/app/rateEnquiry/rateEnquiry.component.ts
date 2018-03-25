import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IRateModal } from './IRateModal';
import { Http } from '@angular/http';


@Component({
    moduleId: "RateEnquiryComponent",
    selector: 'rate-enquiry',
    templateUrl: './rateEnquiry.component.html',
    styleUrls: ['./rateEnquiry.component.css']
})
export class RateEnquiryComponent {

    rate: IRateModal = { name: '', companyName: '', shipmentFrom: '', shipmentTo: '', email: '', message: '', phone: null, prefix: null, volume: null, weight: null }

    constructor(public activeModal: NgbActiveModal, private http: Http) { }

    submit() {
        // this.appService.GetRateInfo(this.rate);
        this.activeModal.close();
    }

}