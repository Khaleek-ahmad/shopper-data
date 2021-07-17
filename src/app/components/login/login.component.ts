import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { TokenStorageService } from 'src/app/services/token.storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup =  new FormGroup({
    email: new FormControl(),
    password: new FormControl()
}); 
  submitted = false;

  constructor(private formBuilder: FormBuilder,private loginService:LoginService,private tokenStorageService:TokenStorageService,private router:Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required]
      }     
       
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    
    this.loginService.create(this.form.value)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          //sessionStorage.setItem('token',response.token);
          this.tokenStorageService.saveToken(response.token);
          this.router.navigate(['category-list']);
        },
        error => {
          console.log(error);
        });
  
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }


}
