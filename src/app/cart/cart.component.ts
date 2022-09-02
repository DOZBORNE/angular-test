import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  changePasswordForm = new FormGroup({
    oldPassword: new FormControl(''),
    newPassword: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  isOn = false;

  constructor() {
    // constructor(private authService: AuthService, private router: Router)
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const formValues = this.changePasswordForm.value;
    if (formValues.newPassword && formValues.newPassword.length < 6) {
      alert('wrong length');
      return;
    }
    // this.authService.changePassword(formValues).subscribe(
    //   (formValuesReturned) => console.log(formValuesReturned, 'Form returned'),
    //   (err) => console.log(err),
    //   () => this.router.navigate(['login'])
    // );
  }

}
