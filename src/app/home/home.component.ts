import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    moduleId: "HomeComponent",
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    ngOnInit() {
    }

    constructor(private modalService: NgbModal) { }

    open(content) {
        this.modalService.open(content, {
            backdrop: 'static',
            keyboard: false
        });
    }

}