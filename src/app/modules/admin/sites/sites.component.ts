import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { CONSTANTS } from 'app/layout/common/constants';
import { GlobalFunctions } from 'app/layout/common/global-functions';

import * as _ from 'lodash';

@Component({
  selector: 'sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss'],
  animations: fuseAnimations,
})
export class SitesComponent implements OnInit {

  isLoading: boolean = false;
  constants: any = CONSTANTS;

  siteObj: any = {};
  isShowWings: boolean = false;
  isShowWingsDropdown: boolean = false;
  selectedWing: number = 0;

  flatTypeArr: any = [
    '1BHK', '2BHK', '3BHK', '4BHK', '5BHK'
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  dataSource: any = [
    {flor_no: 1, flat_no: '202', flat_type: '2BHK', flat_price: '4,40,000', flat_booked: true},
  ]

  constructor(
    private _globalFunctions: GlobalFunctions,
    private _fuseConfirmationService: FuseConfirmationService,
  ) { }

  ngOnInit(): void {
    this.siteObj = {};
    this.siteObj.wings = [];
    this.generateWing(this.siteObj.site_wings);
    console.log(this.siteObj);
  }

  getWings(siteWings: number): any {
    return new Array(siteWings);
  }

  generateWing(wingValue: number) {
    this.siteObj.wings = [];
    if (wingValue && wingValue > 0) {
      for (let index = 0; index < wingValue; index++) {
        const wingObj = {
          wing_name: ''
        };
        if (!this.siteObj.wings || !this.siteObj.wings.length) {
          this.siteObj.wings = [];
        }
        this.siteObj.wings[index] = wingObj;
      }
      this.isShowWings = true;
    } else {
      this.isShowWings = false;
    }
  }

  generateWingDropdown() {
    if (this.isShowWings && this.siteObj && this.siteObj.site_wings && this.siteObj.site_wings > 0 && this.siteObj.wings && this.siteObj.wings.length) {
      let isValid = true;
      _.each(this.siteObj.wings, (wingObj: any) => {
        if (!wingObj || !wingObj.wing_name || wingObj.wing_name == '') {
          isValid = false;
          return false;
        }
      });
      if (isValid) {
        this.isShowWingsDropdown = true;
      }
    }
  }

  saveSite() {
    console.log(this.siteObj);
  }

}