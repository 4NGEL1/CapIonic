import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { LoginRequest } from '../Model/login.model';
import { FeedbackService } from '../services/feedback.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;
  loading = false;
  constructor(
    private fb: FormBuilder,
    private loginSvc: LoginService,
    private feedbackSvc: FeedbackService,
    private router: Router){
    this.formLogin = this.fb.group({
      email: ["",[Validators.required,Validators.email]],
      password: ["",[Validators.required]]
    });

    this.feedbackSvc.loading.subscribe((isLoading)=>{
      this.loading = isLoading;
    });
  }

  ngOnInit() {
  }

  login():void{
    const request = this.formLogin.value as LoginRequest;
    this.feedbackSvc.loading.next(true);
    this.loginSvc.login(request).subscribe(
      (response)=>{
      console.log(response);
      this.feedbackSvc.loading.next(false);
      this.router.navigate(['/home']);
    },(errorObj)=>{
      this.feedbackSvc.loading.next(false);
      this.feedbackSvc.showMessage(errorObj.error.error);
    });
  }
}
