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
      name: 'N6700',
      children: [
        {
          id: 2, name: 'SCPI',
          children: [{
            id: 8, name: 'ABORt', children: [{ id: 9, name: 'ACQuire' },
              { id: 10, name: 'TRANsient' }]
          },
            { id: 11, name: 'CALibrate' },
            { id: 12, name: 'DISPlay' },
            { id: 13, name: 'FETCh' },
            { id: 14, name: 'INITiate' },
            { id: 15, name: 'MEASure' },
            { id: 16, name: 'OUTPut' },
            { id: 17, name: 'SENSe' },
            { id: 18, name: '[SOURce]' },
            { id: 19, name: 'STATus' },
            { id: 20, name: 'SYSTem' },
            { id: 21, name: 'TRIGger' },
          ]
        },
        { id: 3, name: 'Transport' }
      ]
    },
    {
      id: 4,
      name: 'L4411A',
      children: [
        { id: 5, name: 'SCPI' },
        { id: 6, name: 'Transport' }
      ]
    }
  ];
  constructor() { }

  ngOnInit() { }
}