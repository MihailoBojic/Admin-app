import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-app';
  @Input() progress = 0; // Ovaj input možete koristiti da prosledite vrednost progres bara

  constructor() { }

  ngOnInit(): void {
  }

  getProgressColor(): string {
    if (this.progress <= 25) {
      return 'red';
    } else if (this.progress <= 75) {
      return 'yellow';
    } else {
      return 'green';
    }
  }


}
