import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
]
})
export class HomeComponent implements OnInit { 
  constructor() { }
  ngOnInit(): void {
  }
  
  
  showModal = -1;
  uploadedimage:any;

  show(index:any){
    this.showModal = index;
  
  }
  close(){
    this.showModal = -1;
  }

  selectFile() {
    let element: HTMLElement = document.querySelector('input[type="upload"]') as HTMLElement;
    element.click();
  }
  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'anydownloadlink.com');
    link.setAttribute('download', `untitled.png`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}
onSelectFile(e:any){
if(e.target.files){     //files returns the DOM properity for Input Files
let reader = new FileReader ();// Created new instances with NEW keyword for objectFile, Reader Object is used the read the file.
reader.readAsDataURL(e.target.files[0]);
reader.onload = (event:any)=>{
this.uploadedimage=event.target.result;}
  console.log('file', this.uploadedimage);
}
}
}
