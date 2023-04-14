import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { CONSTANTS } from 'app/layout/common/constants';
import { GlobalFunctions } from 'app/layout/common/global-functions';
import { LeadManagerService } from './leadmanager.service';

import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Component({
  selector: 'leadmanager',
  templateUrl: './leadmanager.component.html',
  styleUrls: ['./leadmanager.component.scss'],
  animations: fuseAnimations,
})
export class LeadManagerComponent implements OnInit {

  isLoading: boolean = false;
  constants: any = CONSTANTS;
  
  filterObj: any;
  leadManagers: any;

  
  displayedColumns: string[] = ['flor_no', 'flat_no', 'flat_type', 'flat_price', 'flat_booked'];

  dataSource: any = [
    {flor_no: 1, flat_no: '202', flat_type: '2BHK', flat_price: '4,40,000', flat_booked: true},
  ]

  /**
   * Constructor
   */
  constructor(
    private _leadManagerService: LeadManagerService,
    private _globalFunctions: GlobalFunctions,

    private _changeDetectorRef: ChangeDetectorRef,
    private _fuseConfirmationService: FuseConfirmationService,
  ) { }

  ngOnInit(): void {
    this.filterObj = {
      page: '1',
      limit: '10',
      search: "",
    };
    this.getLeadManager();
    // this._prepareItemsListForm();

    // this.search = _.debounce(this.search, 500);

  }

  getLeadManager(): void {
    this.isLoading = true;
    this._leadManagerService.getAllLeadManager(this.filterObj).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.leadManagers = result.Data.docs;
        console.log(this.leadManagers);
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

  // sortField(event: any = ''): void {
  //   this.filterObj.sortfield = event?.active || "_id";
  //   this.filterObj.sortoption = event?.direction || "-1";
  //   this.getAgents();
  // }

  // paginate(event: any): void {
  //   const page = event ? (event.pageIndex + 1) : 1;
  //   this.filterObj.page = page || '1';
  //   this.filterObj.limit = event?.pageSize || '10';
  //   this.getAgents();
  // }

  // search(event: any): void {
  //   this.filterObj.search = event?.target?.value || '';
  //   this.getAgents();
  // }

  // showFlashMessage(type: 'success' | 'error'): void {
  //   // Show the message
  //   this.flashMessage = type;
  //   // Mark for check
  //   this._changeDetectorRef.markForCheck();
  //   // Hide it after 3 seconds
  //   setTimeout(() => {
  //     this.flashMessage = null;
  //     // Mark for check
  //     this._changeDetectorRef.markForCheck();
  //   }, 3000);
  // }
}