import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-excursion-date',
  templateUrl: './excursion-date.component.html',
  styleUrls: ['./excursion-date.component.css'],
  providers: [HttpService]
})
export class ExcursionDateComponent implements OnInit {
  users: User[] = [];
  constructor(private httpService: HttpService) {}
  ngOnInit() {
    return this.httpService.getData().subscribe(data => this.users = data['excursionList']);
  }
}
