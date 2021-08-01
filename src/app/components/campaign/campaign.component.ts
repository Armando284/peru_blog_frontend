import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campaign } from 'src/app/interfaces/campaign';
import { CampaignService } from 'src/app/services/campaign.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html'
})
export class CampaignComponent implements OnInit {

  campaign: Campaign = {
    authorID: '',
    title: '',
    body: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private _campaignService: CampaignService) {
    this.activatedRoute.params.subscribe(params => {
      this._campaignService.getCampaign(params['id']).subscribe(
        res => {
          this.campaign = res.campaign;
        },
        err => console.log(err)
      );
    });
  }

  ngOnInit(): void {
  }

}
