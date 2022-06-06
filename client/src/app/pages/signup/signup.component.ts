import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.form = this.fb.group({

      'displayName': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'confirm': ['', Validators.required],


  
    })
  }

  ngOnInit(): void {
  }
  signup(){
    
    alert('Signup')
  }

}
