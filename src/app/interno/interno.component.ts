import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-interno',
  templateUrl: './interno.component.html',
  styleUrls: ['./interno.component.scss'],
  imports: [],
})
export class InternoComponent  implements OnInit {

  @Input() titulo: string = 'Título Padrão';

  constructor() { }

  ngOnInit() {}

}
