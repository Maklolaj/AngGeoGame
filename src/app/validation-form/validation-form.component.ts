import { Component, OnInit, DoCheck } from '@angular/core';
import { Person } from '../models/person';
import { ComponentCanDeactivate } from '../Interfaces/myGuard';
import * as data from '../data/jobs.json';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.scss']
})
export class ValidationFormComponent implements OnInit, ComponentCanDeactivate, DoCheck {
  
  
  
  jobs:any= (data as any).default;

  isDirty = true;  //if false => cannot go  

  person:Person={
    name:"",
    surname:"",
    job:""
  }

  constructor() {  
    
    
  }

  saveForm(){
    console.log(this.person);
    
    this.isDirty = true;

  }

  canDeactivate(): boolean {
    return this.isDirty;
  }


  ngOnInit(): void {

  }

  ngDoCheck(){
    console.log(this.isDirty)
    if(this.isDirty == false){
      window.onbeforeunload = function (e:any) {
        e = e || window.event;
  
        // For IE and Firefox prior to version 4
        if (e) {
          e.returnValue = 'Sure?';
        }
      }
    }
  }

  


}


