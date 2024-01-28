import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from "./calculator/calculator.component";
import { ResultComponent } from "./result/result.component";

import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CalculatorComponent, ResultComponent]
})
export class AppComponent {
  title = 'practicaAngularIMC';
  constructor(public dialog: MatDialog){ }
}
