import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  // Só funcionaria se o componente fosse chamado no HTML do elemento pai, mas estamos chamando no TS:
  // @Input() title: string = ''; // Recebe do componente pai
  // @Input() content: string = ''; // Recebe do componente pai

  // // Injetando MAT_DIALOG_DATA na variável data (nome precisa ser esse)
  constructor(@Inject(MAT_DIALOG_DATA) public data: {title: string, content: string}) { }

  ngOnInit(): void {
  }

}
