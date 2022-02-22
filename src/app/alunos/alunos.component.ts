import { AlunoService } from './aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  constructor( private alunoService: AlunoService ) { }
  
  alunos: any = []

  ngOnInit(): void {
    this.alunos = this.alunoService.getAlunos()
  }
}
