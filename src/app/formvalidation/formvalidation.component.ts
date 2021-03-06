import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'form-validation',
    templateUrl: './formvalidation.component.html'
})
export class FormValidationComponent {

    complexForm: FormGroup;

    constructor (fb: FormBuilder) {
        this.complexForm = fb.group({
            'firstName': [null, Validators.required],
            'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
            'gender': [null, Validators.required],
            'hiking': false,
            'running': false,
            'swimming': false
        });
    }

    submitForm (value: any) {
        console.log('formvalidation : ', value);
    }

}