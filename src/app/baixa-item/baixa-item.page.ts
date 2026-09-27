import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { InternoComponent } from '../interno/interno.component';

@Component({
  selector: 'app-baixa-item',
  templateUrl: './baixa-item.page.html',
  styleUrls: ['./baixa-item.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,InternoComponent]
})
export class BaixaItemPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
