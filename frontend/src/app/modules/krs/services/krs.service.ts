import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IKrsCopy } from '../../../core/models/krs-copy.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KrsService {

  /**
   * Create instance of service.
   * @param {HttpClient} _httpClient 
   */
  constructor(private _httpClient: HttpClient) { }

  /**
   * Get KRS copy.
   * @param krs KRS number.
   * @param register Register type.
   * @returns KRS copy data.
   */
  public getKrsCopy(krs: string, register: string): Observable<IKrsCopy> {
    return this._httpClient.get<IKrsCopy>(`http://localhost:8080/api/krs-copy/current?krs=${krs}&register=${register}`)
  }
}
