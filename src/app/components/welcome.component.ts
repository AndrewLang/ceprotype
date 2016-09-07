import {Component, OnInit, OnDestroy}        from '@angular/core';
import {ROUTER_DIRECTIVES }                 from '@angular/router';


@Component({
    selector: 'app',
    templateUrl: 'src/views/welcome.html',
    //template:'<h2>welcome</h2>',
    //providers:[]
    directives: [ROUTER_DIRECTIVES]
})
export class WelcomeComponent implements OnInit, OnDestroy {

    ngOnInit() {
        console.log("welcome Component");
        document.querySelector('#about-modal').classList.add('is-shown');

        let demoBtns = document.querySelectorAll('.js-container-target')
        // Listen for demo button clicks
        Array.prototype.forEach.call(demoBtns, function (btn:any) {
            btn.addEventListener('click', function (event:any) {
                event.target.parentElement.classList.toggle('is-open')                
            });
        });
    }
    ngOnDestroy() {

    }
}