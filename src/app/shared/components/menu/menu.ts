import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, MatToolbarModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {}
