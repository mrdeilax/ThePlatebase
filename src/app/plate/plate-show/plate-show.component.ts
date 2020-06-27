import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plate-show',
  templateUrl: './plate-show.component.html',
  styleUrls: ['./plate-show.component.css']
})
export class PlateShowComponent implements OnInit {

  @Input() plates = [];

  // plateInfoArr = [
  //   {plateNum: 'aaa123', fname: 'petras', lname: 'jonaitis'},
  //   {plateNum: 'aab223', fname: 'algirdas', lname: 'jonaitis'},
  //   {plateNum: 'aac323', fname: 'nesugalvoju', lname: 'jonaitis'},
  //   {plateNum: 'aad423', fname: 'jlol', lname: 'jonaitis'}
  // ];
  constructor() { }

  ngOnInit(): void {
  }

}
