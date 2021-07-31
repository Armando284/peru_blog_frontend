import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Campaign } from '../interfaces/campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private BASE_URL: string = 'http://localhost:3000/campaigns';

  constructor(private http: HttpClient) { }

  getCampaigns(): Observable<any> {
    return this.http.get(`${this.BASE_URL}`);
  }

  getCampaign(id: string): Observable<Campaign> {
    return this.http.get<Campaign>(`${this.BASE_URL}/${id}`)
  }

  createCampaign(campaign: Campaign): Observable<Campaign> {
    return this.http.post<Campaign>(`${this.BASE_URL}/create`, campaign);
  }

  updateCampaign(id: string, campaign: Campaign): Observable<Campaign> {
    return this.http.put<Campaign>(`${this.BASE_URL}/update?campaignID=${id}`, campaign);
  }

  deleteCampaign(id: string): Observable<Campaign> {
    return this.http.delete<Campaign>(`${this.BASE_URL}/delete?campaignID=${id}`);
  }
}
