import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class TodoFormComponent {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.email, Validators.required]]
    });
  }

}
