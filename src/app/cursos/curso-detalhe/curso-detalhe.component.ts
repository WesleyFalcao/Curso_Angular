import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  ID: number
  sub_Inscricao: Subscription
  obj_Array_Curso: any

  constructor( 
    private route: ActivatedRoute, 
    private cursosService: CursosService,
    private router: Router
    ) {
    //this.nm_Id = this.route.snapshot.params['id']  //pegando o parâmetro da rota de uma forma não muito funcional
    //console.log(this.route)
  }
  
  ngOnInit(): void {
    this.sub_Inscricao = this.route.params.subscribe((params: any) => {   //pegando o parâmetro da rota da forma correta
      this.ID = params['id']

      this.obj_Array_Curso = this.cursosService.GetCurso(this.ID)

      if(this.obj_Array_Curso == null){
        this.router.navigate(['/nao-encontrado'])
      }
    })
  }

  ngOnDestroy(){
    this.sub_Inscricao.unsubscribe()
  }
}
