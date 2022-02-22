import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosService } from './cursos/cursos.service';
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';
import { AlunosRoutingModule } from './alunos/alunos.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    AlunosModule,
    BrowserModule,
    CursosModule,
    AppRoutingModule,
    AlunosRoutingModule,
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
