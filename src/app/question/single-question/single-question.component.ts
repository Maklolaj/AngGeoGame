import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.scss']
})
export class SingleQuestionComponent implements OnInit {

  constructor() { }
  @Input() question:any;
  isCorrect=0;
  //userAnswer:string=""
  checkAnswer(userAnswer:string){
    if(this.question.correctAnswer == userAnswer)
    {
      this.isCorrect=1;
    }
    else{
      this.isCorrect=2;
    }

  }

  ngOnInit(): void {
    console.log(this.question)
  }

}
