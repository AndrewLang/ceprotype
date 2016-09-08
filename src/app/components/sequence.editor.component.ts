import { Component, OnInit }            from '@angular/core';
import {TreeComponent, TreeModel}       from 'ng2-tree';

import { InstrumentTreeComponent }      from "./instruments.tree.component";

@Component({    
    templateUrl: 'src/views/sequence.editor.html',
    directives:[ InstrumentTreeComponent ]
})
export class SequenceEditorComponent implements OnInit {    

    constructor() { }

    ngOnInit() { }
}