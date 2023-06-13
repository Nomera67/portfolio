import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  private isLightModeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public setLightModeValue(isLightMode: boolean): void {
    this.isLightModeSubject.next(isLightMode);
  }

  public getIsLightMode(): Observable<boolean> {
    return this.isLightModeSubject.asObservable();
  }

}
