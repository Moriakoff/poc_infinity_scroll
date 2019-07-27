import { Component } from '@angular/core';
import {Person} from './person-list/model/Person';
import {PersonHttpService} from './person-list/service/person-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private personHttpService: PersonHttpService) {
  }

  ngOnInit() {
  }
}
