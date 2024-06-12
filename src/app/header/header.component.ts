import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,RouterModule,RouterLink,FooterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
