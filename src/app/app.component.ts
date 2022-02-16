import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl ="";
  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
    this.imgUrl = "../assets/BridgeLabz-2.jpg";
  }
}
