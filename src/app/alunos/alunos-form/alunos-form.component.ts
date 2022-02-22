import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, OnDestroy {

  constructor(
    private alunoService: AlunoService,
    private router: ActivatedRoute
  ) { }

  inscricao: Subscription
  aluno: any = {}

  ngOnInit(): void {
    this.inscricao = this.router.params.subscribe(
      (params: any) => {

        let id = params['id']

        this.aluno = this.alunoService.getAluno(id)

        if (this.aluno === null){
          this.aluno = {}
        }
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }
}
