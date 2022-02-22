import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit, OnDestroy {

  obj_Array_Cursos: any[]
  subscription: Subscription
  nm_Pagina: number

  constructor(
    private cursosService: CursosService,
    private rotaquery: ActivatedRoute,
    private router: Router,
    )
  { }

  ngOnInit(): void {

    this.obj_Array_Cursos = this.cursosService.GetCursos()

    this.subscription = this.rotaquery.queryParams.subscribe(
      (queryParams: any) => this.nm_Pagina = queryParams['pagina']   //estou pegando o queryParams da rota e o armazenando em nm_Pagina
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  ProximaPagina(){
    this.router.navigate(['/cursos'], {queryParams: {'pagina': ++this.nm_Pagina}})
  }
}
