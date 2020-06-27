import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plate-add',
  templateUrl: './plate-add.component.html',
  styleUrls: ['./plate-add.component.css']
})
export class PlateAddComponent implements OnInit {
  enteredValue= '';
  newPlate = 'Test';

  onAddPlate(){
    this.newPlate = this.enteredValue;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
