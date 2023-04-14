import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { CONSTANTS } from 'app/layout/common/constants';
import { GlobalFunctions } from 'app/layout/common/global-functions';

import * as _ from 'lodash';
import { SitesService } from '../sites.service';

@Component({
  selector: 'create-sites',
  templateUrl: './create-sites.component.html',
  styleUrls: ['./create-sites.component.scss'],
  animations: fuseAnimations,
})
export class CreateSitesComponent implements OnInit {

  isLoading: boolean = false;
  constants: any = CONSTANTS;

  siteObj: any = {};
  isShowWings: boolean = false;
  isShowWingList: boolean = false;
  isShowWingTable: any = [];

  selectedWingIndex: number = 0;

  flatTypeArr: any = [
    '1BHK', '2BHK', '3BHK', '4BHK', '5BHK'
  ];

  displayedColumns: string[] = ['flor_no', 'flat_no', 'flat_type', 'flat_price', 'flat_booked'];

  dataSource: any = [
    {flor_no: 1, flat_no: '202', flat_type: '2BHK', flat_price: '4,40,000', flat_booked: true},
  ]

  constructor(
    private _siteService: SitesService,
    private _globalFunctions: GlobalFunctions,
    private _fuseConfirmationService: FuseConfirmationService,
  ) { }

  ngOnInit(): void {
    this.siteObj = {
      site_location: '',
      site_name: '',
      site_description: '',
      site_wings: 0
    };
    this.siteObj.wings = [];
    this.generateWing(this.siteObj.site_wings);
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
      this.isShowWingList = isValid;
    }
  }

  generateFlatTable(wingIndex: number) {
    this.isShowWingTable[wingIndex] = false;
    this.selectedWingIndex = wingIndex;
    if (this.isShowWings && this.siteObj && this.siteObj.site_wings && this.siteObj.site_wings > 0 && this.siteObj.wings && this.siteObj.wings.length && this.siteObj.wings[wingIndex]) {
      let isValid = true;
      if (!this.siteObj.wings[wingIndex] || !this.siteObj.wings[wingIndex].total_floor || this.siteObj.wings[wingIndex].total_floor <= 0) {
        isValid = false;
      }
      if (!this.siteObj.wings[wingIndex] || !this.siteObj.wings[wingIndex].total_flat || this.siteObj.wings[wingIndex].total_flat <= 0) {
        isValid = false;
      }
      
      if (isValid) {
        // if (!this.siteObj.wings[wingIndex] || !this.siteObj.wings[wingIndex].floor_details || !this.siteObj.wings[wingIndex].floor_details.length) {
        // }
        this.siteObj.wings[wingIndex].floor_details = [];
        for (let index = 0; index < this.siteObj.wings[wingIndex].total_flat; index++) {
          const floorObj = {
            flor_no: '',
            flat_no: '',
            flat_type: '',
            flat_price: '',
            flat_booked: false,
            booking_detail: {}
          };
          if (!this.siteObj.wings[wingIndex].floor_details || !this.siteObj.wings[wingIndex].floor_details.length) {
            this.siteObj.wings[wingIndex].floor_details = [];
          }
          this.siteObj.wings[wingIndex].floor_details[index] = floorObj;
        }
        this.isShowWingTable[wingIndex] = true;
      }
    }
  }

  saveSite() { 
    this.isLoading = true;
    this._siteService.createSite(this.siteObj).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        // this.products = result.Data.docs;
        // console.log(this.products);
        // const pagination: any = this._globalFunctions.copyObject(result.Data);
        // delete pagination.docs;
        // this.pagination = pagination;
      } else {
        this._globalFunctions.successErrorHandling(result, this, true);
      }
      this.isLoading = false;
    }, (error: any) => {
      this._globalFunctions.errorHanding(error, this, true);
      this.isLoading = false;
    });
  }

}