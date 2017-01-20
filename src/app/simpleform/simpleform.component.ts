import { Component } from '@angular/core';

@Component({
    selector: 'simple-form',
    templateUrl: './simpleform.component.html'
})
export class SimpleFormComponent {

    submitForm(form: any): void {
        console.log('Form data : ', form);
    }

}