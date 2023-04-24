import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  // Create an instance of Form Group
  myForm!: FormGroup 

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.email]),
      age:new FormControl("",[Validators.pattern('^[0-9]+$'),Validators.min(10)])
    });
  }


  // Submit event for the form that displays  the value
  handleSubmit() {
     console.log(this.myForm.value)
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
