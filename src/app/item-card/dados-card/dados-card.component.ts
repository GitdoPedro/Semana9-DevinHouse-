import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-dados-card',
  templateUrl: './dados-card.component.html',
  styleUrls: ['./dados-card.component.css']
})
export class DadosCardComponent {
  @Input() nome:string = ""
  @Input() imagem:string = ""
  @Input() nomeAtor:string = ""
  @Input() descricao:string = ""

}
