import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AirlineregisterService } from '../services/airlineregister.service';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerairline',
  templateUrl: './registerairline.component.html',
  styleUrls: ['./registerairline.component.css']
})
export class RegisterairlineComponent implements OnInit {
  airlineRegisterForm: any;
  isSubmitted = false;
  airlinesData:any;
  file:any;
  isLoggedIn = false;
  imageBaseData:any;
  constructor(private formBuilder: FormBuilder,
    public service: AirlineregisterService, 
    private toastr:ToastrService,
    private tokenStorageService: TokenStorageService,
    private router:Router) { }

  ngOnInit(): void {
    this.airlineRegisterForm = this.formBuilder.group({
      airlineName: ['', Validators.required],
      airlineLogo: ['', Validators.required],
      airlineContactNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern("^[0-9]{10}$")]],
      airlineContactAddress: ['', Validators.required]
  });
  this.getAllAirlines();
  }
  get f() { return this.airlineRegisterForm.controls; }
  onSubmit(){
    this.isSubmitted = true;
        if (this.airlineRegisterForm.invalid) {
            return;
        }
        this.airlineRegisterForm.value.airlineLogo=this.imageBaseData;
        this.service.registerAirline(this.airlineRegisterForm.value).subscribe(
          res => {
            if(res.model){
              this.toastr.success(res.messages[0]);
              this.onReset();
              this.getAllAirlines();
            }
            else{
              this.toastr.error(res.messages[0]);
            }
          },
          err => { console.log(err); })
        //console.log(JSON.stringify(this.airlineRegisterForm.value));
  }
  onReset(){
    this.isSubmitted=false;
    this.airlineRegisterForm.reset();
  }
  getAllAirlines(){
    this.service.getAllAirlines().subscribe(
      res=>{
        if(res.model.length >0){
          this.airlinesData=res.model;
        }
        else{
          this.toastr.warning("No Data Found");
        }
      },
      err => { console.log(err); }
    )
  }
  removeAirline(airlineId:any){
    this.service.removeAirline(airlineId).subscribe(
      res=>{
        if(res.model){
          this.toastr.success(res.messages[0]);
        }
        this.getAllAirlines();
    },
    err => { console.log(err); }
    )
  }
  blockAirline(airlineId:any){
    this.service.blockAirline(airlineId).subscribe(
      res=>{
        if(res.model){
          this.toastr.success(res.messages[0]);
        }
        this.getAllAirlines();
    },
    err => { console.log(err); }
    )
  }
  onChange(event:any){
    this.file=event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onloadend = ()=> {
      this.imageBaseData=reader.result?.toString();
    };
  }
  addInventory(airlineId:any){
    this.router.navigate(['/inventory'],{queryParams:{'airlineId':airlineId}})
  }
}
