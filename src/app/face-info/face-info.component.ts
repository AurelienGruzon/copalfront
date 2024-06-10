import { Component } from '@angular/core';

@Component({
  selector: 'app-face-info',
  standalone: true,
  imports: [],
  templateUrl: './face-info.component.html',
  styleUrl: './face-info.component.scss'
})
export class FaceInfoComponent {
  title!: string;
  description!: string;
  createdAt!: Date;
  faceInfo!: number;

  ngOnInit(): void {
    this.title = "NomTest";
    this.description = "DescriptionTest";
    this.createdAt = new Date();
    this.faceInfo = 0
  }
}
