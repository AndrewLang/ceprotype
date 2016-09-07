import {Component,OnInit, OnDestroy}        from '@angular/core';
import {ROUTER_DIRECTIVES }                 from '@angular/router';


@Component({
    selector: 'app',
    templateUrl: 'src/views/home.html',
    directives:[ROUTER_DIRECTIVES ]
})
export class AppComponent implements OnInit, OnDestroy {
    
    ngOnInit() {
        
    }
    ngOnDestroy() {
        
    }
}