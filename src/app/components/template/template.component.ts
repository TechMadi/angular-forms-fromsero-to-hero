import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  user: any = {
    password:"",
  };

  onSubmitTemplateBased() {
      
  }

  /**
   * 
   * Todo App 
   * A list of todos 
   * A todo 
   * Todo Service 
   *   
   * 
   * Things to Add 
   * Constructor - properties , before class , dependecy injection 
   */

  constructor() { }

  ngOnInit(): void {
  }


 
  submitForm(form: NgForm) {
  // Obtaining Values from  the form 
     console.log(form.value)
}

  fullUpdate() {
    // this.form.setValue({firstName: 'Partial', password: 'monkey'});
}

partialUpdate() {
    // this.form.patchValue({firstName: 'Partial'});
}

}
