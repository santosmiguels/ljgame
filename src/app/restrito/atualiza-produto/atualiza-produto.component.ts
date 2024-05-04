import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../models/Produto.model';
import { ProdutoService } from '../../produto.service';
//import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-atualiza-produto',
  templateUrl: './atualiza-produto.component.html',
  styleUrl: './atualiza-produto.component.css'
})
export class AtualizaProdutoComponent implements OnInit{

  public produtoId: number = 0;

  public produto: Produto = new Produto(0,"","","",0);

  constructor(private _produtoService: ProdutoService, private _router: Router, private _acticatedRoute: ActivatedRoute) {
    this._acticatedRoute.params.subscribe(params => this.produtoId = params['id']);
  }
  ngOnInit(): void {
    this.listaProduto();
  }

  listaProduto(): void {
    this._produtoService.getProduto(this.produtoId).subscribe(
      (res: any) => {
        this.produto = new Produto(
          res[0].id,
          res[0].produto,
          res[0].descricao,
          res[0].foto,
          res[0].preco
        );
      }
    )
  }
  atualizar(id: number){
    this._produtoService.atualizarProduto(id,this.produto).subscribe(
      produto => {this.produto = new Produto(0,"","","",0)},
      err => {alert("Erro ao atualizar")}
    );

    this._router.navigate(["restrito/lista"]);

  }
}