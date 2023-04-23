import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  myForm: FormGroup = new FormGroup({
    name: new FormControl("",Validators.required),
    email: new FormControl("",Validators.email)
  })

  constructor() { }

  ngOnInit() {
    // this.myForm = new FormGroup({
      // name: ['Sammy', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // message: ['', [Validators.required, Validators.minLength(15)]],
    // });
  }


  get myFormControls() {
     return  this.myForm.controls
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }

  submitData(form:FormGroup) {
    console.log(form.controls)
  }

}
