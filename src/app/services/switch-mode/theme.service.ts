import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isSwitchModeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public setSwitchModeValue(isSwitchMode: boolean): void {
    this.isSwitchModeSubject.next(isSwitchMode);
  }

  public getIsSwitchMode(): Observable<boolean> {
    return this.isSwitchModeSubject.asObservable();
  }

}
