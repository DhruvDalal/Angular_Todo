import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dda-todo';
  constructor(){
    // setTimeout(()=>{
    //     this.title="Jai shree Ram";
    // },2000)
  }
}
