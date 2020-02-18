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
    console.log(localStorage);
    movieLocal[id] = value;
    localStorage.setItem('movie', JSON.stringify(movieLocal));
  }

  public getLocalStorage(value: string, id: string): boolean {
    const local = localStorage.getItem('movie');
    const storedValue = local ? JSON.parse(local)[id] : {};
    return storedValue !== null && storedValue === value;
  }

  public initList(value: string): string[] {
    const movieLocal = JSON.parse(localStorage.getItem('movie'));
    return Object.keys(movieLocal)
      .filter(key => movieLocal[key] === value);
  }

}
