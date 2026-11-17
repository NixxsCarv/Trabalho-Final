import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  imports: [MatButtonModule],
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Trabalho-Final');

  increment() {
    this.count.update(v => v + 1);
}

}