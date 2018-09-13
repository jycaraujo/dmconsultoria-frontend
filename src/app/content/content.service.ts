import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  public tabs_value: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  getPoints() {
    return this.http.get('../assets/data/points.json');
  }
  getProfile() {
    return this.http.get('../assets/data/clienteselecionado.json');
  }


}
