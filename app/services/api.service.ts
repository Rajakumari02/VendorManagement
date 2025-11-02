import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  // Vendors
  getVendors(): Observable<any[]> { return this.http.get<any[]>(`${this.baseUrl}/ld/vendors`); }
  createVendor(data:any): Observable<any> { return this.http.post(`${this.baseUrl}/ld/vendors`, data); }
  updateVendor(id:string, data:any): Observable<any> { return this.http.put(`${this.baseUrl}/ld/vendors/${id}`, data); }
  deleteVendor(id:string): Observable<any> { return this.http.delete(`${this.baseUrl}/ld/vendors/${id}`); }

  // Training requests
  getTrainingRequests(): Observable<any[]> { return this.http.get<any[]>(`${this.baseUrl}/ld/requests`); }
  createTrainingRequest(data:any): Observable<any> { return this.http.post(`${this.baseUrl}/ld/requests`, data); }
  publishTrainingRequest(id:string): Observable<any> { return this.http.post(`${this.baseUrl}/ld/requests/${id}/publish`, {}); }

  // Trainer profiles
  getAllTrainerProfiles(): Observable<any[]> { return this.http.get<any[]>(`${this.baseUrl}/ld/trainers`); }
  shortlistTrainer(mappingId:string): Observable<any> { return this.http.post(`${this.baseUrl}/ld/trainers/${mappingId}/shortlist`, {}); }
  selectTrainer(mappingId:string): Observable<any> { return this.http.post(`${this.baseUrl}/ld/trainers/${mappingId}/select`, {}); }

  // Vendor portal
  getPublishedRequests(): Observable<any[]> { return this.http.get<any[]>(`${this.baseUrl}/vendor/requests`); }
  submitTrainerProfile(requestId:string, data:any): Observable<any> { return this.http.post(`${this.baseUrl}/vendor/requests/${requestId}/trainer`, data); }
  submitQuotation(mappingId:string, data:any): Observable<any> { return this.http.post(`${this.baseUrl}/vendor/trainer/${mappingId}/quotation`, data); }

  // extra
  getTrainerProfilesByRequest(requestId:string): Observable<any[]> { return this.http.get<any[]>(`${this.baseUrl}/ld/requests/${requestId}/trainers`); }
  getVendorSubmissionsForRequest(requestId:string): Observable<any[]> { return this.http.get<any[]>(`${this.baseUrl}/ld/requests/${requestId}/vendors`); }
  getTrainerHistory(trainerId:string): Observable<any[]> { return this.http.get<any[]>(`${this.baseUrl}/ld/trainer/history/${trainerId}`); }
}
