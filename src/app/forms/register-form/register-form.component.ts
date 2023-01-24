import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private userService: UserService) { }

  registerForm = this.formBuilder.group(
    {
      name: [''],
      email: [''],
      password: [''],
      city: [''],
      street: [''],
      number: [''],
    }
  )

  ngOnInit(): void {
  }

  ngOnSubmit(): void {

    this.userService.createUser(this.registerForm.value.name!, 
      this.registerForm.value.email!,
      this.registerForm.value.password!,
      this.registerForm.value.city!,
      this.registerForm.value.street!,
      this.registerForm.value.number!).subscribe();
  }

}
