import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  accessToken: string;
  workspace: string;
  constructor() { }

  setLocalStorage(key: string, data: string) {
    localStorage.setItem(key, data);
  }

  getLocalStorage(key) {
    return localStorage.getItem(key);
  }

  deleteLocalStorage(key) {
    return localStorage.removeItem(key);
  }

  clearLocalStorage() {
    return localStorage.clear();
  }

}
