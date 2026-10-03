import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { InternoComponent } from '../interno/interno.component';

@Component({
  selector: 'app-itens-lista-compras',
  templateUrl: './itens-lista-compras.page.html',
  styleUrls: ['./itens-lista-compras.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,InternoComponent]
})
export class ItensListaComprasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
