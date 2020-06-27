import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-plate-add',
  templateUrl: './plate-add.component.html',
  styleUrls: ['./plate-add.component.css']
})
export class PlateAddComponent implements OnInit {
  enteredPlateNumber= "";
  enteredFname = "";
  enteredLname= "";

  @Output() plateCreated = new EventEmitter();


  onAddPlate(){
    const plate = { 
      number: this.enteredPlateNumber, 
      fname: this.enteredFname,
      lname: this.enteredLname
    }
    this.plateCreated.emit(plate);
  }

  //test
  enteredTitle = "";
  enteredContent = "";
  @Output() postCreated = new EventEmitter();

  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
