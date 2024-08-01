import { Component } from '@angular/core';
import {IonItem,IonHeader, IonToolbar, IonTitle, IonContent, IonRow, IonGrid, IonCol, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { trash } from "ionicons/icons";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonCol, IonGrid, IonRow, IonItem, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {
    addIcons({trash});
  }
}