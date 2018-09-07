import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: "ServicesComponent",
    selector: 'services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent {

    // constructor(private route: ActivatedRoute) {
    //     this.route.fragment.subscribe((hash: string) => {
    //         if (hash) {
    //             const cmp = document.getElementById(hash);
    //             if (cmp) {
    //                 let node = cmp;
    //                 let yourHeight = 1000;

    //                 // scroll to your element
    //                 // node.scrollIntoView(true);

    //                 // now account for fixed header
    //                 var scrolledY = window.scrollY;

    //                 if (scrolledY) {
    //                     window.scroll(0, scrolledY - yourHeight);
    //                 }
    //                 // cmp.scrollIntoView();
    //             }
    //         } else {
    //             // window.scrollTo(0, 0);
    //         }
    //     });
    // }

}