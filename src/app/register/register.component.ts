import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Userregister } from '../models/userregister';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:any;
  register:Userregister;
  isSubmitted = true;
  constructor(private formBuilder: FormBuilder,private router:Router,private service:AuthService,private toastr:ToastrService) { 
    this.register = {} as Userregister;
  }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      userName:[this.register.userName, Validators.required],
      password: [this.register.password, Validators.required],
      email:[this.register.email,[Validators.required,Validators.email]],
      contactNumber:[this.register.contactNumber,[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]{10}$")]]
    })
  }
  get f(){
    return this.registerForm.controls;
  }
  onSubmit(){
    this.isSubmitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.service.register(this.registerForm.value).subscribe(
          res => {
            if(res.model){
              this.toastr.success(res.messages[0]);
              this.router.navigate(['/login']);
            }
            else{
              this.toastr.error(res.messages[0]);
            }
          },
          err => { console.log(err); })
      // console.log(this.registerForm.value);
  }
  onCancel(){
    this.router.navigate(['/login'])
  }
}
