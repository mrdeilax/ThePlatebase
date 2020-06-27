import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPlates = [];
  storedPosts = [];

  onPlateAdded(plate){
    this.storedPlates.push(plate);
  }
}
