import { Component, OnInit } from '@angular/core';
import { User } from "./user"
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent implements OnInit {
  title = 'practice-app';
  count: number = 0;
  constructor(private router: Router) { }

  update() {
    this.count++;
  }

  ngOnInit() {

  }


  
  /**
   * check if the username is valid
   * @param username 
   */
  uCheck(username: string) {
    let usernameLength: number = username.length;

    
    if(usernameLength == 0) {
      document.write("Please enter a username");
    }

    if (usernameLength > 16 || usernameLength < 4) {
      document.write("The username needs to be between 4 and 16 characters");
      return false;
    }
    if(username === "admin") {
      document.write("The username already exists");
      return false;
    }
    return true;
  }


  /**
   * check if the password is valid
   * @param password 
   */
  pCheck(password: string) {
    let number : RegExp = /[0-9]/;
    let passwordLength: number = password.length;

    if(passwordLength == 0) {
      document.write("Please enter a password");
    }
    if (passwordLength > 16 || passwordLength < 4) {
      document.write("The password needs to be between 4 and 16 characters");
      return false;
    }
    if(!password.match(number)) {
      document.write("The password needs to have at least one number");
      return false;
    }
    return true;

  }


  /**
   * Method called with form info (username and password ) after submitting
   * @param f 
   */
  onSubmit(f: NgForm) {

    let username = f.value.username;
    let password = f.value.password;

    if (typeof username === "number") username.toString;
    if (typeof password === "number") password.toString;

    let validUsername : boolean = this.uCheck(username);
    let validPassword : boolean = false;
    if(validUsername) {
       validPassword = this.pCheck(password);
    }
  
    console.log(validUsername + "" + validUsername)

    
    if(validUsername && validPassword) {
      this.router.navigateByUrl("/login")
    }
  
  
  }


}













