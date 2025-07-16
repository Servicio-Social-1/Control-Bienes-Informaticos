import { Component } from '@angular/core';
import { Registro } from '../registro/registro';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [RouterModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  constructor(private router: Router) {}
}
