import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddinventoryService } from '../services/addinventory.service';

@Component({
  selector: 'app-addinventory',
  templateUrl: './addinventory.component.html',
  styleUrls: ['./addinventory.component.css']
})
export class AddinventoryComponent implements OnInit {
  addInventoryForm:any;
  isSubmitted=false;
  airlineId:number=0;
  constructor(private formBuilder: FormBuilder,
    private service:AddinventoryService,
    private toastr:ToastrService,
    private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.addInventoryForm = this.formBuilder.group({
      flightNumber: ['', Validators.required],
      fromPlace: ['', Validators.required],
      toPlace: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      scheduledDays: ['', Validators.required],
      instumentUsed: [''],
      noOfBusinessClassSeats: ['', Validators.required],
      noOfNonBusinessClassSeats: ['', Validators.required],
      totalCost: ['', Validators.required],
      numberOfRows: ['', Validators.required],
      mealType: ['', Validators.required],
      tripType:['',Validators.required]
  });
    this.router.queryParams.subscribe(
      res=>{
        this.airlineId = res["airlineId"];
      }
    )
  }
  get f(){
    return this.addInventoryForm.controls;
  }
  onSubmit(){
    this.isSubmitted = true;
        if (this.addInventoryForm.invalid) {
            return;
        }
        if(this.addInventoryForm.value.tripType=="oneWay"){
          this.addInventoryForm.value.oneWay=true;
        }
        else{
          this.addInventoryForm.value.twoWay=true;
        }
      this.addInventoryForm.value.airlineId=parseInt(this.airlineId.toString());
      this.service.addInventory(this.addInventoryForm.value).subscribe(
        res => {
          if(res.model){
            this.toastr.success(res.messages[0]);
            this.onReset();
            this.updateIsInventory(this.airlineId);
          }
          else{
            this.toastr.error(res.messages[0]);
          }
        },
        err => { console.log(err); })
  }
  onReset(){
    this.isSubmitted=false;
    this.addInventoryForm.reset();
  }
  updateIsInventory(airlineId:any){
    this.service.updateIsInventory(airlineId).subscribe(
      res=>{
        console.log(res);
      });
  }
}
