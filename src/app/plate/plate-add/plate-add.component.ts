import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';

import { PlateService } from '../plate.service';

@Component({
  selector: 'app-plate-add',
  templateUrl: './plate-add.component.html',
  styleUrls: ['./plate-add.component.css']
})

export class PlateAddComponent implements OnInit {
  constructor(public plateService: PlateService) { }

  onAddPlate(form: NgForm){
    if (form.invalid) {
      return;
    }

    this.plateService.addPlate( 
      form.value.plateNumber,
      form.value.plateFname,
      form.value.plateLname
      );
  }

  ngOnInit(): void {
  }

}
