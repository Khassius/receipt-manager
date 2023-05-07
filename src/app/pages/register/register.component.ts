import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    })
  });

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    
  }

  onRegister() {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.get('email')?.value as string, this.registerForm.get('password')?.value as string).then(cred => {
      console.log(cred);
    }).catch(error => {
      console.error(error);
    });
  }

  onLogin(){

  }

}
