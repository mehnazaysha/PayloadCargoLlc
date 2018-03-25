import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppServices } from '../appServices/appServices';


@Component({
    moduleId: "RateEnquiryComponent",
    selector: 'rate-enquiry',
    templateUrl: './rateEnquiry.component.html',
    styleUrls: ['./rateEnquiry.component.css']
})
export class RateEnquiryComponent {

    // @Input() rateEnquiry: boolean = false
    name: string = '';
    shipmentFrom: string = '';
    shipmentTo: string = '';
    constructor(public activeModal: NgbActiveModal) {}

    // constructor(private modalService: NgbModal) { }

    // ngOnInit(): void {
    //     if (this.appservice.customTabButtons) {
    //         console.log(this.appservice.customTabButtons)
    //         // this.open();
    //     }
    // }

    // open() {
    //     this.modalService.open(content, {
    //         backdrop: 'static',
    //         keyboard: false,
    //         size: 'lg'
    //     });
    // }
}