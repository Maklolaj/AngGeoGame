import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {

  constructor() { 
    const takenSeatsFromDb = [ "2,3", "1,5", "2,5", "3,1", "1,2"]
    this.getTakenSeats(takenSeatsFromDb)
  }

  multi:number[][] = [ [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0]]
  takenSeats:string[]=[];

  changeColor(idx:number, a:number, b:number){
    console.log(idx);
    if( idx == 0 )
    {
      this.multi[a][b] = 1;
    }
    else{
      this.multi[a][b] = 0;
    }
    console.log(`${a} oraz ${b}`)

  }

  saveSeats(){
    for(let i = 0; i < this.multi.length; i++) {
  
      for(let j = 0; j < this.multi[i].length; j++) {
        
         //console.log(this.multi[i][j]);

         if(this.multi[i][j] == 1){
           this.takenSeats.push(`${i},${j}`)
         }
         
      }
   }
   console.log(this.takenSeats)
  }


  // GET TAB of reservations for partucular show and mark seats 
  // [ "2,3", "1,5", "2,5", "3,1", "1,2"]
  

  getTakenSeats(takenSeatsFromDb:string[]){

    var str = "2,3"; 
    takenSeatsFromDb.forEach(element => {

      var splitted = element.split(",", 2);
      var a = parseInt(splitted[0]);
      var b = parseInt(splitted[1]);

      this.multi[a][b] = 1;

    });

  }

  ngOnInit(): void {
  }

}
