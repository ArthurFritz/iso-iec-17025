import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['nota', 'classificacao'];

  dataSource = [
    {
      nota : 0,
      classificacao : "Não há evidência de implementação do requisito"
    },
    {
      nota : 1,
      classificacao : "Não está documentado e está pouco disseminado pelas áreas de interesse"
    },
    {
      nota : 2,
      classificacao : "Não está documentado, mas está disseminado pelas áreas de interesse"
    },
    {
      nota : 3,
      classificacao : "Está documentado, mas não está disseminado pelas áreas de interesse"
    },
    {
      nota : 4,
      classificacao : "Está documentado, mas está pouco disseminado pelas áreas de interesse"
    },
    {
      nota : 5,
      classificacao : "Está implementado, documentado e disseminado pelas áreas de interesse"
    }
]

  constructor() { }

  ngOnInit() {
  }

}
