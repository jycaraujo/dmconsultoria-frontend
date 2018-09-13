import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public vis: EventEmitter<any> = new EventEmitter();
  public clean: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  getProfile() {
    return this.http.get('../assets/data/clienteselecionado.json');
  }

  changeVisibility(flag) {
    this.vis.emit(true);
    if (flag)
      this.clean.emit(true);
  }
}
