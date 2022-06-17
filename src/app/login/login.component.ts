import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Userlogin } from '../models/userlogin';
import { TokenStorageService } from '../services/token-storage.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  user:Userlogin;
  isSubmitted = false;
  isLoggedIn = false;
  isLoginFailed = false;
  userName:string='';
  constructor(private formBuilder: FormBuilder,
    private service:AuthService,
    private toastr:ToastrService,
    private router:Router,
    private tokenStorage: TokenStorageService) { 
    this.user = {} as Userlogin;
  }
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      userName:[this.user.userName, Validators.required],
      password: [this.user.password, Validators.required]
    });
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }
  get f(){
    return this.loginForm.controls;
  }
  onSubmit(){
    this.isSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.service.login(this.loginForm.value).subscribe(
          res => {
            if(res.model!=null){
              this.tokenStorage.saveToken(res.model.token);
              this.tokenStorage.saveUser(res.model);
              this.isLoggedIn = true;
              if(res.model.isAdminUser){
                this.router.navigate(['/airlineregister'])
                .then(()=>{
                  window.location.reload();
                });
              }
              else{
                this.router.navigate(['/flightsearch'])
                .then(()=>{
                  window.location.reload();
                });
              }
              this.toastr.success(res.messages[0]);
            }
            else{
              this.toastr.error(res.messages[0]);
            }
          },
          err => { console.log(err); })
  }
  
}
