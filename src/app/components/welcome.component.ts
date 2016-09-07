import {Component,OnInit, OnDestroy}        from '@angular/core';
import {Routes, RouterModule}               from '@angular/router';


@Component({    
    templateUrl: 'src/views/welcome.html',
    providers:[]
})
export class WelcomeComponent implements OnInit, OnDestroy {
    
    ngOnInit() {
        console.log("welcome Component");
        document.querySelector('#about-modal').classList.add('is-shown')
    }
    ngOnDestroy() {
        
    }
}