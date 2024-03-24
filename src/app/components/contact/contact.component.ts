import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
Validators
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private _AuthService: AuthService, private _Router: Router, private _FormBuilder: FormBuilder) { }

  sendform: FormGroup = this._FormBuilder.group({
    email: ["", [Validators.email, Validators.required]],
    phone: ["", [Validators.pattern("^01[0125][0-9]{8}$"), Validators.required]],
    name: ["", [Validators.minLength(3), Validators.maxLength(30), Validators.required]]
  });

  msgError: string = "";

  handleForm(): void {
    if (this.sendform.valid) {
      this._AuthService.sendform(this.sendform.value).subscribe({
        next: (response) => {
          if (response.message === "Email sent successfully") {
            console.log(response);
            this._Router.navigate(["/Home"]);
          }
        },
        error: (err) => {
          if (err.error && err.error.errors && err.error.errors[0]) {
            this.msgError = err.error.errors[0].msg;
          }
        }
      });
    } else {
      this.sendform.markAllAsTouched();
    }
  }
}