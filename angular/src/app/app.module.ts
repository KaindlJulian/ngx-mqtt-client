import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MqttModule } from 'ngx-mqtt';

import { mqtt_service_options } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MqttModule.forRoot(mqtt_service_options)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
