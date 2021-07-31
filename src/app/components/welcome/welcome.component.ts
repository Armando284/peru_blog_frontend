import { Component, OnInit } from '@angular/core';
import { CampaignService } from 'src/app/services/campaign.service';
import { Campaign } from 'src/app/interfaces/campaign';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: [
  ]
})
export class WelcomeComponent implements OnInit {

  campaignList: Campaign[];

  constructor(private _campaignService: CampaignService) {
    this.campaignList = [];
  }

  ngOnInit(): void {
    this.getCampaigns();
  }

  getCampaigns() {
    this._campaignService.getCampaigns().subscribe(
      res => {
        console.log(res);
        this.campaignList = res.campaigns;
        console.log(this.campaignList);

      },
      err => console.log(err)
    );
  }
}
