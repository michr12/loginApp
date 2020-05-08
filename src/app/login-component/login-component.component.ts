import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponentComponent implements OnInit {

 
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  count: number = 0;
  

  update() {
    this.count++;
    if(this.count == 10) {
    this.router.navigateByUrl("/calculator")
  }
  }

  
}
