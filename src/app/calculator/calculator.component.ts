import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: [ './calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

 
  multiply: string = '\\*';
  division: string = '/';
  addition: string = '\\+';
  substraction: string = '-';
  output: string;
  operationChar : RegExp = /[\\*|/|\\+|-]/

  ngOnInit(): void {
  }



  parse(s: string) {
    let operation: string;
    console.log("Works")

    if (s.match(this.multiply)) {
      operation = this.multiply;
    }
    if (s.match(this.division)) {
      operation = this.division;
    }

    if (s.match(this.addition)) {
      operation = this.addition;
    }
    if (s.match(this.substraction)) {
      operation = this.substraction;
    }
    let numbers: Array<string> = s.split(this.operationChar);
    let number1: number = parseInt(numbers[0]);
    let number2: number = parseInt(numbers[1]);
    console.log(number1 + "" + number2)

    this.calculate(number1, number2, operation)
  }

  calculate(number1: number, number2: number, operation: string) {
    let total: number;
    switch (operation) {

      case this.multiply: {
        total = number1*number2;
        break;
      }
      case this.division: {
        total = number1 / number2;
        break;
      }
      case this.addition: {
        total = number1 + number2;
        break;
      }
      case this.substraction: {
        total = number1 - number2;
        break;
      }
     

    }
    this.output = total + "";
    (<HTMLInputElement>document.getElementById("answer")).value = this.output;
    console.log(this.output);
  }

}
