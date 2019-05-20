import { Injectable } from '@angular/core';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyMqttService {

  constructor(private mqtt: MqttService) { }

  observe(topic: string): Observable<IMqttMessage> {
    return this.mqtt.observeRetained(topic);
  }

  publish(topic: string, message: string) {
    return this.mqtt.publish(topic, message, {retain: true, qos: 1});
  }
}
