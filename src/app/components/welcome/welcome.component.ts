import { Component, OnInit } from '@angular/core';
import { CampaignService } from 'src/app/services/campaign.service';
import { Campaign } from 'src/app/interfaces/campaign';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: [
  ]
})
export class WelcomeComponent implements OnInit {

  campaignList: Campaign[];

  constructor(private _campaignService: CampaignService, private router: Router) {
    this.campaignList = [];
  }

  ngOnInit(): void {
    this.getCampaigns();
  }

  getCampaigns() {
    this._campaignService.getCampaigns().subscribe(
      res => {
        this.campaignList = res.campaigns;
      },
      err => console.log(err)
    );
  }

  readMore(id: string) {
    this.router.navigate(['/campaign', id])
  }
}
