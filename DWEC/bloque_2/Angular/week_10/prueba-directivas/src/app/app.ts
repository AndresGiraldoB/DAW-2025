import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SetColor } from "./directives/set-color";
import { FormsModule } from '@angular/forms';
import { SetCase } from './directives/set-case';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SetColor, SetCase, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prueba-directivas');
  color=signal("cyan");
  textCase=signal("lowercase");
}
