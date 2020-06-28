import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Plate } from '../plate.model';
import { PlateService } from '../plate.service';

@Component({
  selector: 'app-plate-show',
  templateUrl: './plate-show.component.html',
  styleUrls: ['./plate-show.component.css']
})
export class PlateShowComponent implements OnInit, OnDestroy {

  plates: Plate[] = [];
  private plateSub: Subscription;


  constructor(public plateService: PlateService) { }

  ngOnInit(): void {
    this.plates = this.plateService.getPlate();
    this.plateSub = this.plateService.getPlateUpdateListener()
      .subscribe((plates: Plate[]) => {
        this.plates = plates;
      });
  }

  ngOnDestroy(){
    this.plateSub.unsubscribe();
  }


  // plateInfoArr = [
  //   {plateNum: 'aaa123', fname: 'petras', lname: 'jonaitis'},
  //   {plateNum: 'aab223', fname: 'algirdas', lname: 'jonaitis'},
  //   {plateNum: 'aac323', fname: 'nesugalvoju', lname: 'jonaitis'},
  //   {plateNum: 'aad423', fname: 'jlol', lname: 'jonaitis'}
  // ];
}
