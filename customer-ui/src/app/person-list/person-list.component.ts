import {Component, OnInit} from '@angular/core';
import {Person} from './model/Person';
import {PersonHttpService} from './service/person-http.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  public persons: Person[] = [];
  private page = 0;

  direction = '';

  constructor(private personHttpService: PersonHttpService) {
  }

  ngOnInit() {
    this.personHttpService.getPersonsByPage(0).subscribe(data => this.persons = data);
  }

  private getPerson(page: number) {
    this.personHttpService.getPersonsByPage(page).subscribe(data => {
      data.forEach(value => {
        this.persons.push(value);
      });
    });
  }

  onScroll() {
    this.page = this.page + 1;
    this.getPerson(this.page);
    this.direction = 'down';
  }
}
