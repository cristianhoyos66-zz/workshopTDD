import { TodoFormComponent } from './todo-form.component';
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('A form group with 3 controls should be created', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('lastName')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('name and email form controls should be required', () => {
    const nameControl = component.form.get('name');
    const emailControl = component.form.get('email');

    nameControl.setValue('');
    emailControl.setValue('');

    expect(nameControl.valid).toBeFalsy();
    expect(emailControl.valid).toBeFalsy();
  });

  it('name and email form controls should not be required', () => {
    const nameControl = component.form.get('name');
    const emailControl = component.form.get('email');

    nameControl.setValue('Pepito');
    emailControl.setValue('pepito@test.com');

    expect(nameControl.invalid).toBeFalsy();
    expect(emailControl.invalid).toBeFalsy();
  });

  it('email form control should be invalid when does not match with email pattern', () => {
    const emailControl = component.form.get('email');

    emailControl.setValue('pepitotest.com');

    expect(emailControl.invalid).toBeTruthy();
  });

  it('email form control should be valid when matches with email pattern', () => {
    const emailControl = component.form.get('email');

    emailControl.setValue('pepito@test.com');

    expect(emailControl.valid).toBeTruthy();
  });


});
