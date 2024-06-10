import { Component } from '@angular/core';
import { FaceInfoComponent } from './face-info/face-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceInfoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
