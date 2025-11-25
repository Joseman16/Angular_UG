import { Component } from '@angular/core';
import { Header } from './header/header';
import { Main } from './main/main';

@Component({
  selector: 'app-home',
  imports: [Main, Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  titulo = "TAREA DE ANGULAR: COMPONENTES REUTILIZABLES";
  subtitulo = "Creación de Head y Main como componentes hijos";
  tituloCard = "Contenido dentro del componente MAIN";
}
