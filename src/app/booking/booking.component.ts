import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
 flightBookData:any;
 bookingForm:any;
 isSubmitted=false
  constructor(private router:ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataservice: DataService) { }

  ngOnInit(): void {
    this.bookingForm=this.formBuilder.group({
      flightNumber: ['',Validators.required],
      fromAddress: ['',Validators.required],
      toAddress: ['',Validators.required],
      fromDate: ['',Validators.required],
      toDate: ['',Validators.required],
      emailId: ['',[Validators.required,Validators.email]],
      numberOfSeats: ['',Validators.required],
      price: ['',Validators.required],
      mealType: ['',Validators.required],
      passengers: this.formBuilder.group({
        passengerName:['',Validators.required],
        passengerAge:[''],
        passengerGender:[''],
        PassengerSeatNumber:['',Validators.required]
      })
    })
    
    this.dataservice.searchFlightData.subscribe(
      result=>{
        this.flightBookData=result;
        this.bookingForm.patchValue({
          flightNumber:this.flightBookData.flightNumber,
          fromAddress:this.flightBookData.placeFrom,
          toAddress:this.flightBookData.placeTo,
          price:this.flightBookData.price
        })
        this.bookingForm.controls.fromDate.setValue(formatDate(this.flightBookData.departureDate,'yyyy-MM-dd','en'));
        this.bookingForm.controls.toDate.setValue(formatDate(this.flightBookData.arraivalDate,'yyyy-MM-dd','en'));
      });
  }
  get f(){
    return this.bookingForm.controls;
  }
  onSubmit(){

  }
}
