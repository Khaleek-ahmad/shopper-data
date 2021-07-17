import { Component, OnInit, isDevMode, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/shared/HttpService';
import { AppConfig } from 'src/app/shared/App.Config';
import { Constants } from 'src/app/shared/Constant';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompareJSON } from '../../shared/CompareJson';
import { AuthService } from 'src/app/services/auth/AuthService';
import { LoginModel } from '../login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading: boolean;
  private apiServer;
  private difference: any = "";
  @Output() loginOut: EventEmitter<LoginModel> = new EventEmitter<LoginModel>();
  showLoginPage: boolean = false;
  constructor(private fb: FormBuilder,
    private httpService: HttpService,
    private router: Router,
    private toaster: ToastrService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.loading = true;
    this.apiServer = AppConfig.settings.apiServer;
    let checkConfg = new CompareJSON(this.httpService);
    checkConfg.compareJonFile("assets/configurables/config.deploy.json", AppConfig.settings, false).then(x => this.difference = x);
  }

  ngOnInit() {
    this.showLoginPage = true;
    this.loading = false;
    this.init();

  }

  init() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {   
    if (this.loginForm.invalid) {
      return;
    }
    if (this.difference != "") {
      this.toaster.error(this.difference + " missing in config file", "", { timeOut: 0 })
      return;
    }

    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.loading = true;
    let url = this.apiServer[Constants.BASE_URL] + this.apiServer["authentication"]["endPoint"];
    this.httpService.userAuthentication(url, email, password).subscribe((response: Response) => {   
      if (response.status == 200 && response.body != undefined) {
        debugger;
        let data: any = response.body;
        this.loading = false;
        sessionStorage.basic = email;
        this.authService.saveToken(JSON.stringify(data.token));
        sessionStorage.setItem('userToken', JSON.stringify(data.token));
        sessionStorage.setItem('userName', email);
        let routingPath = "generic/dashboard/category";
        this.router.navigate([routingPath]);
      }
    },
      (err: HttpErrorResponse) => {
        this.loading = false;
        if (err.error.Message != undefined) {
          throw err;
        }
        else {
          throw err;
        }
      });
  }
}
