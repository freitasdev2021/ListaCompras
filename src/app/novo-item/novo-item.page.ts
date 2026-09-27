import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { InternoComponent } from '../interno/interno.component';

@Component({
  selector: 'app-novo-item',
  templateUrl: './novo-item.page.html',
  styleUrls: ['./novo-item.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,InternoComponent]
})
export class NovoItemPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
