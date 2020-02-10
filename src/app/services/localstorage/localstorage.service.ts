import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(
  ) {}

  public storeLocal(value: string, id: string) {
    let movieLocal = localStorage.getItem('movie');
    movieLocal = movieLocal ? JSON.parse(movieLocal) : {};
    movieLocal[id] = value;
    localStorage.setItem('movie', JSON.stringify(movieLocal));
  }

  public getLocalStorage(value: string, id: string): boolean {
    const local = localStorage.getItem('movie');
    const storedValue = local ? JSON.parse(local)[id] : {};
    return storedValue !== null && storedValue === value;
  }

}
