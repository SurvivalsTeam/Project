import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excursion',
  templateUrl: './excursion.component.html',
  styleUrls: ['./excursion.component.css']
})
export class ExcursionComponent implements OnInit {
  excursion = [
    {name: 'ex 1'},
    {name: 'ex 2'},
    {name: 'ex 3'}
  ];
  ngOnInit() {
  }

}
