import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {
bookingHistoryData:any
bookingHistoryForm:any;
isSubmitted = false;
bookingCancel=false;
  constructor(private service:BookingService,
    private toastr:ToastrService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.bookingHistoryForm=this.formBuilder.group({
      emailId:['',[Validators.required,Validators.email]],
    })
  }
  get f(){
    return this.bookingHistoryForm.controls;
  }
  onSubmit(){
    this.isSubmitted = true;
    if (this.bookingHistoryForm.invalid) {
        return;
    }
    this.service.getBookingHistory(this.bookingHistoryForm.value).subscribe(
      res=>{
        if(res.model.length>0){
          this.bookingHistoryData=res.model;
          this.toastr.success(res.messages[0])
        }
        else{
          this.toastr.error(res.messages[0])
        }
      })
  }
  cancel(pnrNumber:any){
    this.service.cancelBooking(pnrNumber).subscribe(
      res=>{
        if(res.model){
          this.toastr.success(res.messages[0])
          this.bookingCancel =true;
        }
        else{
          this.toastr.error(res.messages[0])
        }
      })
  }
  onReset(){
    this.isSubmitted=false;
    this.bookingHistoryForm.reset();
  }
}
