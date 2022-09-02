import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  registerForm: any;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      Email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }


    //https://stackblitz.com/edit/angular-8-registration-login-example?file=app%2Fregister%2Fregister.component.ts
  }

}
