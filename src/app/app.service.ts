import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public clean: EventEmitter<any> = new EventEmitter();

  constructor() { }

  cleanPanel(){
    this.clean.emit(true);
  }
}
