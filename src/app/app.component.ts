import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    goToRoute(id) {
        // document.getElementById(id).scrollIntoView();
        const cmp = document.getElementById(id);
        if (cmp) {
            let node = cmp;
            let yourHeight = 200;
            // scroll to your element
            node.scrollIntoView(true);
            // now account for fixed header
            var scrolledY = window.scrollY;
            if (scrolledY) {
                window.scroll(0, scrolledY - yourHeight);
            }
        }
    }
}
