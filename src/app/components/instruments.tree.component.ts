import { Component, OnInit }            from '@angular/core';
import { TreeComponent }                from 'angular2-tree-component';

@Component({
    selector: 'instrument-tree',
    directives: [TreeComponent],
    templateUrl: 'src/views/instruments.tree.html'
})
export class InstrumentTreeComponent implements OnInit {
   nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
    constructor() { }

    ngOnInit() { }
}