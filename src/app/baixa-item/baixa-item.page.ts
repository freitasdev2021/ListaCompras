import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonSearchbar,IonTitle, IonToolbar,IonItem,IonList,IonInput,IonLabel,IonText,IonSelect,IonModal,IonSelectOption,IonButton } from '@ionic/angular';
import { InternoComponent } from '../interno/interno.component';

@Component({
  selector: 'app-baixa-item',
  templateUrl: './baixa-item.page.html',
  styleUrls: ['./baixa-item.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonSearchbar,IonToolbar,IonText,CommonModule,IonModal,IonLabel, FormsModule,InternoComponent,IonItem,IonList,IonInput,IonSelect,IonSelectOption,IonButton]
})
export class BaixaItemPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
