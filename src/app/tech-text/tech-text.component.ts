import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-tech-text',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet,RouterModule],
  templateUrl: './tech-text.component.html',
  styleUrl: './tech-text.component.css'
})
export class TechTextComponent {

}
