import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../data.service';
import { FlightsearchService } from '../services/flightsearch.service';

@Component({
  selector: 'app-flightsearch',
  templateUrl: './flightsearch.component.html',
  styleUrls: ['./flightsearch.component.css']
})
export class FlightsearchComponent implements OnInit {
  flightSearchForm: any;
  isSubmitted = false;
  flightSearchData:any;
  constructor(private formBuilder: FormBuilder,
    private service:FlightsearchService,
    private toastr:ToastrService,
    private router:Router,
    private dataService:DataService) { }

  ngOnInit(): void {
    this.flightSearchForm=this.formBuilder.group({
      tripType:['',Validators.required],
      fromPlace: ['', Validators.required],
      toPlace: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: [''],
    })
  }
  get f(){
    return this.flightSearchForm.controls;
  }
  onSubmit(){
    this.isSubmitted = true;
    if (this.flightSearchForm.invalid) {
        return;
    }
    if(this.flightSearchForm.value.tripType=="oneWay"){
      this.flightSearchForm.value.oneWay=true;
    }
    else{
      this.flightSearchForm.value.twoWay=true;
    }
    this.service.getFlightSearch(this.flightSearchForm.value).subscribe(
      res=>{
        if(res.model!=null){
          this.flightSearchData = res.model
        }
        else{
          this.toastr.error(res.messages[0]);
        }
      }
    )
  }
  onReset(){
    this.isSubmitted=false;
    this.flightSearchForm.reset();
  }
  navigateToBooking(data:any){
    this.dataService.changeName(data);
    this.router.navigate(['/booking']);
  }
}
