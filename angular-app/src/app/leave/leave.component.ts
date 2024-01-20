import { Component, OnInit } from '@angular/core';
import { LeaveService } from './leave.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {

  leaves?:any;
  constructor(private leaveService:LeaveService){

  }
  ngOnInit(): void {

    this.load();
  }

  load():void{
    this.leaveService.findAll().subscribe(
      {
        next: res=>{this.leaves= res.body},

        error:error=>{console.log(error);}
        
      }
    );
  
  }

}
