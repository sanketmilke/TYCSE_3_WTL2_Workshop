import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectTitle = "Learn Angular 16";
  mycolor = "green";
  status = false;
  name="angular";

  Books=[
    {"BookName":"Harry Potter", "BookAuthor":"J K Rowling"},
    {"BookName":"Myself", "BookAuthor":"Atharva Shengule"},
    {"BookName":" SIH Trip to Bhopal", "BookAuthor":"Vedshree kulkarni"},
  ]
  showData(){
    alert("Button Clicked")
    this.status=true
  };
}

