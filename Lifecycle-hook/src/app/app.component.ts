import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Lifecycle-hook';

  constructor()
  {
  
    console.log('constructor')
  }
  ngOnInit(){
   
    console.log('ngOnInit...')
  }
}
