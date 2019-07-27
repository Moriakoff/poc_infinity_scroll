import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../model/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonHttpService {

  public url = 'api/persons?page=';

  constructor(private httpClient: HttpClient) { }



  getPersonsByPage(page: number) {
      return this.httpClient.get<Person[]>(this.url + page);
  }
}
