import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIS } from 'src/api';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'pt-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
  email:string='';
  password: string='';
  signInForm!: FormGroup;
  constructor(private service:CommonService,public router: Router){

  }
  ngOnInit(): void {
    this.signInForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }
  submit(){
      this.service.postMethod(APIS.USER_LOGIN,this.signInForm.value).subscribe((res:any)=>{
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      },
      (er:any)=>{
        console.log("fail");
      }
      )
  }
}
