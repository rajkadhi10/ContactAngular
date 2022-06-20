import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private _url = `http://localhost:3000/api`;

  constructor(private http: HttpClient) {}
  getContacts(): Observable<any> {
    return this.http.get(`${this._url}/getContacts`);
  }
  addContact(data: any): Observable<any> {
    return this.http.post(`${this._url}/addContact`, data);
  }
  deleteContact(id: number): Observable<any> {
    return this.http.delete(`${this._url}/deleteContact/${id}`);
  }
  updateContact(data: any, id: number): Observable<any> {
    return this.http.patch(`${this._url}/updateContact/${id}`, data)
}
}
