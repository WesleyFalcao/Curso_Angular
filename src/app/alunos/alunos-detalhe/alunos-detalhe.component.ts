import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any
  incricao: Subscription

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.incricao = this.route.params.subscribe((
      (params: any) => {
        let id = params['id']

        this.aluno = this.alunoService.getAluno(id)
      }
    ))
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

  ngOnDestroy() {
    this.incricao.unsubscribe()
  }
}
