import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { APP_BASE_HREF,NgClass }            from '@angular/common';
import { FormsModule }                      from '@angular/forms';
import { Routes, RouterModule }             from '@angular/router';
import { Http, Headers,HTTP_PROVIDERS}      from '@angular/http';


import { ErrorHandlingService}              from './services/ErrorHandlingService';
import { DataService}                       from './services/DataService';
import { routing, appRoutingProviders }     from './app.routing';
import { AppComponent}                      from './components/app.component';
import { WelcomeComponent }                 from './components/welcome.component';
import { SequenceEditorComponent }          from './components/sequence.editor.component';

@NgModule({
    imports: [BrowserModule,FormsModule,RouterModule, routing],
    declarations: [AppComponent,WelcomeComponent, SequenceEditorComponent],
    providers:[ appRoutingProviders,DataService, ErrorHandlingService,HTTP_PROVIDERS ],
    bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(){
        
    }
}