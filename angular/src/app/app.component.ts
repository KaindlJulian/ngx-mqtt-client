import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MyMqttService } from './mqtt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lastMessage: string;
  topic: string;

  @ViewChild('message') message: ElementRef;

  constructor(private mqttService: MyMqttService) { }

  publish() {
    this.mqttService.publish(this.topic, this.message.nativeElement.value).subscribe(_ => { });
  }

  subscribe() {
    console.log(this.topic);
    this.mqttService.observe(this.topic).subscribe(lastMessage => {
      this.lastMessage = lastMessage.payload.toString();
    });
  }
}
