import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ResultComponent } from "../result/result.component";





@Component({
    selector: 'app-calculator',
    standalone: true,
    templateUrl: './calculator.component.html',
    styleUrl: './calculator.component.css',
    imports: [FormsModule, CommonModule, ResultComponent, MatIconModule, ReactiveFormsModule]
})
export class CalculatorComponent {

  


  @Output() historyIMCUpdated: EventEmitter<{ message: string, date: string }[]> = new EventEmitter();


  name: string = '';
  gender: string = '';
  weight: number = 70;
  height: number = 170;
  imc: number;
  age: number = 30;
  resultIMC: { message: string, date: string } | null = null;
  historyIMC: { message: string, date: string }[] = [];
  buttonSizeClass: string = 'size-8';
  pesoControl = new FormControl(75);
  ageControl = new FormControl(30);
  isFixedBackground = false;
  isFixedBackground2 = false;
  
  alturaControl = this.fb.control(160, [Validators.min(140), Validators.max(230)]);
  
  constructor(public dialog: MatDialog,private fb: FormBuilder ) { }


  incrementAge() {
    this.age++;
  }

  decrementAge() {
    if (this.age > 0) {
      this.age--;
    }
  }

  
  incrementWeight() {
    this.weight++;
  }

  decrementWeight() {
    if (this.weight > 0) {
      this.weight--;
    }
  }

  incrementHeight() {
    this.height++;
  }
  updateHeight(event:any ) {
    this.height = event.target.value;
  }

  decrementHeight() {
    if (this.height > 0) {
      this.height--;
    }
  }

  resetForm() {
    this.name = '';
    this.gender = '';
    this.weight = 0;
    this.height = 0;
  }




  calculateIMC(){
     const imc: number = (this.weight / (this.height * this.height)) * 10000 ;
    
  
    const message: string = this.getIMCMessage(imc);
    this.resultIMC = { message, date: new Date().toLocaleString() };
    this.historyIMC.push(this.resultIMC);

     this.historyIMCUpdated.emit(this.historyIMC);
  } 
 
  public getIMCMessage(imc: number): string {
    const imcFormatted: string = imc.toFixed(2);
  
    if (imc < 18.5) {
      return `${this.name} IMC: ${imcFormatted}\nPor debajo de tu peso ideal`;
    } else if (imc < 24.9) {
      return `${this.name} IMC: ${imcFormatted}\nPeso ideal`;
    } else {
      return `${this.name} IMC: ${imcFormatted}\nFuck Panza`;
    }
  }


  toggleFixedBackground(buttonNumber: number) {
    if (buttonNumber === 1) {
      this.isFixedBackground = true;
      this.isFixedBackground2 = false;
    } else if (buttonNumber === 2) {
      this.isFixedBackground = false;
      this.isFixedBackground2 = true;
    }
  }
  
   
  }








