import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

let interval;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('clone') template;
  @ViewChild('container', { read: ViewContainerRef }) container;
  title = 'app works!';
  start = true;
  end = false;
  isAuto = false;

  toggle() {
    this.start = !this.start;
    this.end = !this.end;
  }

  constructor(private resolver: ComponentFactoryResolver) { }

  auto() {
    if (this.isAuto) {
      clearInterval(interval);
    } else {
      interval = setInterval(() => this.toggle(), 1000);
    }
    this.container.createEmbeddedView(this.template);
    this.isAuto = !this.isAuto;
  }

}
