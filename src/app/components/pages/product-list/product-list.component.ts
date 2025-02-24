import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { catchError, delay, map, of } from 'rxjs';
import { Produto } from 'src/app/models/Product';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // Propriedades da classe (acessíveis no template e nos métodos da classe)
  displayedColumns: string[] = ['id', 'name', 'quantity', 'price', 'actions'];
  isLoadingResults = true;
  dataSource!: MatTableDataSource<Produto>; // Guarda os dados retornados pela API para a tabela

  // Injeção de dependências
  constructor(private _httpClient: HttpClient, public dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute) {}

  // Este hook só é chamado depois que o Angular já chamou o construtor (fez a injeção de dependências) e aplicou os bindings (valores vindos do template e dos inputs).
  ngOnInit() {
    this.isLoadingResults = true;
    // Faz a chamada HTTP à API e retorna um Observable
    return this._httpClient.get<Produto[]>('/api/products').pipe(
      delay(2000), // método temporário para atrasar um pouco o retorno do servidor e conseguirmos visualizar o spinner de carregamento
      catchError(erro => {
        console.error('Erro capturado:', erro);
        // Abrindo a dialog, passando pra ela o título e conteúdo
        this.dialog.open(DialogComponent, {data: {title: 'Erro', content: 'Erro ao obter dados do servidor'}});
        return of(null); // Caso haja erro na requisição, retorna null em vez de quebrar o fluxo
      }),
      map(response => {
        this.isLoadingResults = false; // Atualiza flag de carregamento
        if (response === null) return [];
        return response;
      })
    // Quando a resposta chegar, são atribuídos ao this.data, populando a tabela
    ).subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
    });
  }

  applyFilter(event: Event) {
    // event.target refere-se ao elemento HTML que disparou o evento (<input>).
    // Fazemos um type assertion para tratá-lo como um HTMLInputElement.
    // O valor digitado é armazenado em filterValue.
    const filterValue = (event.target as HTMLInputElement).value;

    // this.dataSource: É a instância do MatTableDataSource, que gerencia dados da tabela.
    // filter: Propriedade do MatTableDataSource usada para filtrar os dados.
    // trim(): Remove espaços extras antes e depois do termo.
    // toLowerCase(): Converte o termo para minúsculas, garantindo que o filtro seja case-insensitive.
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onGetInfo(row: any) {
    const id = row.id;
    this.router.navigate([id], {relativeTo: this.activatedRoute});
  }

  onAdd() {
    this.router.navigate(['formulario'], {relativeTo: this.activatedRoute});
  }

  onEdit(row: any) {
    this.router.navigate(['formulario'], {relativeTo: this.activatedRoute});
  }

  onDelete(row: any) {

  }

}


