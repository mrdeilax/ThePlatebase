import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

import { Plate } from '../plate.model';
import { PlateService } from '../plate.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component'

@Component({
  selector: 'app-plate-show',
  templateUrl: './plate-show.component.html',
  styleUrls: ['./plate-show.component.css']
})
export class PlateShowComponent implements OnInit, OnDestroy {
  isLoading = false;
  plates: Plate[] = [];
  private plateSub: Subscription;

  totalPlates = 10;
  platesPerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1,2,4,8]

  constructor(public plateService: PlateService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.plateService.getPlate(this.platesPerPage, 1);
    this.plateSub = this.plateService.getPlateUpdateListener()
      .subscribe((plateData: {plates: Plate[], plateCount: number}) => {
        this.isLoading = false;
//
        this.totalPlates = plateData.plateCount;
        this.plates = plateData.plates;
      });
  }

  ngOnDestroy(){
    this.plateSub.unsubscribe();
  }


  onDeleteConfirm(plateId){
    this.dialog.open(ConfirmDialogComponent,{ data: {id: plateId, platesPerPage: this.platesPerPage, currentPage: this.currentPage}})
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex +1;
    this.platesPerPage = pageData.pageSize;
    this.plateService.getPlate(this.platesPerPage, this.currentPage);
  }

  

} 