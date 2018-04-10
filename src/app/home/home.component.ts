import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalServices } from '../appServices/modalServices';


@Component({
    moduleId: "HomeComponent",
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    ngOnInit() {
    }

    constructor(private appService: ModalServices) { }

}