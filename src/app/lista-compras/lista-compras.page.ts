import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton,IonIcon } from '@ionic/angular';
import { InternoComponent } from '../interno/interno.component';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.page.html',
  styleUrls: ['./lista-compras.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton,IonIcon,InternoComponent]
})
export class ListaComprasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
