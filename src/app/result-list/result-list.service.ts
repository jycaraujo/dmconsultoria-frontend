import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResultListService {

  constructor(private http: HttpClient) { }

  getRecords() {
    return this.http.get('../assets/data/clients.json');
  }
}
