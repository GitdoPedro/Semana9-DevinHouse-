import { Component,Input } from '@angular/core';
import {PERSONAGENS} from '../personagens'

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})

export class ItemCardComponent {
  //@Input() personagens: any;
  personagens = PERSONAGENS
};
