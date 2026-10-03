import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonItem,IonList,IonInput,IonSelect,IonSelectOption,IonButton } from '@ionic/angular';
import { InternoComponent } from '../interno/interno.component';

@Component({
  selector: 'app-adicionar-compras',
  templateUrl: './adicionar-compras.page.html',
  styleUrls: ['./adicionar-compras.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,InternoComponent,IonItem,IonList,IonInput,IonSelect,IonSelectOption,IonButton]
})
export class AdicionarComprasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
