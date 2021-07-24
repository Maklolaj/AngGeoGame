import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-insert-image',
  templateUrl: './insert-image.component.html',
  styleUrls: ['./insert-image.component.scss']
})
export class InsertImageComponent implements OnInit {
  imageSrc:string = 'assets/images/iphone.png'  
  imageAlt:string = 'iPhone'

  uploaded :boolean=false;
  myImage:string='';
  
  constructor(private httpClient:HttpClient) { }

  selectedFile:any = null;
  

  onFileSelected(event:any){

    var reader: FileReader = new FileReader();

    //this.selectedFile = event.target.files[0];

    var file: File = event.target.files[0];

    ///var preview = document.querySelector('img') || '';
    

    if(file){
      reader.readAsDataURL(file);
    }

    reader.onloadend = (e) => {
      var temp = reader.result
      this.myImage = String(temp);
      console.log(reader.result);
      localStorage.setItem('dataSource', String(temp));
      console.log(localStorage.getItem('dataSource'));
      this.uploaded = true;

    }


    //const img = document.createElement("img");
    //link.download = 'download.jpg';
    //img.src = String(reader.result);
    //document.body.appendChild(img);
    //link.href = 
    //link.click();
    //var fs = require('fs');
    //var string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
    //var regex = /^data:.+\/(.+);base64,(.*)$/;

    //var matches = string.match(regex)!;
    //var ext = matches[1];
   // var data = matches[2];
   // var buffer = Buffer.from(data, 'base64');
   // fs.writeFileSync('data.' + ext, buffer);



    
  }

  onUpload(){
    //const endpoint = 'meterial-app/src/assets/images';
    //const formData: FormData = new FormData();
    //formData.append('.jpg', this.selectedFile, 
    //this.selectedFile.name);
    //this.httpClient.post(endpoint, formData);
    //console.log("After")
    //console.log(this.selectedFile);
    
    
    
    //console.log(this.reader.readAsDataURL(this.selectedFile))

    //localStorage.setItem("recent-image", this.reader.result);
  }

  ngOnInit(){
  }

  postFile(fileToUpload: File): void {

    const endpoint = 'meterial-app/src/assets/images';
    const formData: FormData = new FormData();
    formData.append('.jpg', fileToUpload, fileToUpload.name);
    this.httpClient.post(endpoint, formData);
    console.log("After")
}

}
