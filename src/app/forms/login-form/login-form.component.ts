import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user-service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  loginForm = this.formBuilder.group(
    {
      email: [''],
      password: [''],
    }
  )

  ngOnInit(): void {
  }

  ngOnSubmit(): void {
    
  }
}
