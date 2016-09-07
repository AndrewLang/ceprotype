import {Component,OnInit, OnDestroy}        from '@angular/core';
import {ROUTER_DIRECTIVES }                 from '@angular/router';


@Component({    
    selector:'app',
    templateUrl: 'src/views/welcome.html',
    //template:'<h2>welcome</h2>',
    //providers:[]
    directives:[ROUTER_DIRECTIVES ]
})
export class WelcomeComponent implements OnInit, OnDestroy {
    
    ngOnInit() {
        console.log("welcome Component");
        document.querySelector('#about-modal').classList.add('is-shown')
    }
    ngOnDestroy() {
        
    }
}