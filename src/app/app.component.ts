import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meterial-app';

  constructor(private _location: Location){}

  isClicked:boolean=false;

  backClicked() {
    this._location.back();
  }

  routerClicked(){
    this.isClicked = true;
  }

}
