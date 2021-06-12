import { Component, OnInit } from '@angular/core';
import * as data from './questions_base.json';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  json_data:any = (data as any).default;
  list_of_questions = this.json_data.questions;
  
  constructor() {
   }

  ngOnInit(): void {
    //console.log(this.first_question)
  }

}
