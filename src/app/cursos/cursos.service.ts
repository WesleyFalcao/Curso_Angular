import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  GetCursos() {
    return [
      { id: 1, nome: "Angualar" },
      { id: 2, nome: "Java" }
    ]
  }

  GetCurso(id: number){
    const cursos = this.GetCursos()
    for(let i = 0; i <cursos.length; i++){
      let curso = cursos[i]
      if(curso.id = id){
        return curso
      }
    }
    return null
  }

  constructor() { }
}
