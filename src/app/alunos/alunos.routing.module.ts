import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlunoDetalheComponent } from "./alunos-detalhe/alunos-detalhe.component";
import { AlunoFormComponent } from "./alunos-form/alunos-form.component";
import { AlunosComponent } from "./alunos.component";

const alunosRoutes: any = [

      //ao configurar as rotas, as que tiverem parâmetros dinâmicos devem ficar abaixo 
      //das que tiverem parâmetros hardcoded

      //essa abordagem de é interessate caso seja preciso exibir 2 componentes
      //ao mesmo tempo na tela

      {path: 'alunos', component: AlunosComponent, children: [
            {path: 'novo', component: AlunoFormComponent},   
            {path: ':id', component: AlunoDetalheComponent},
            {path: ':id/editar', component: AlunoFormComponent},
      ]},
]

@NgModule({
      imports: [RouterModule.forChild(alunosRoutes)],
      exports: [RouterModule]
})

export class AlunosRoutingModule{

}