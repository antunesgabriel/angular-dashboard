import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input('error') error?: boolean;

  @Input('placeholder') placeholder = ' ';

  @Input('label') label = '';

  @Input('inputId') inputId = '';

  @Input('controlName') controlName = '';

  //@ts-ignore
  @Input('parentFormGroup') parentFormGroup: FormGroup;

  @Input('inputType') inputType?: string = 'text';

  @Input('showRightIcon') showRightIcon: boolean = false;

  @Input('rightIcon') rightIcon: string = 'assets/icons/outline/eye-off.svg';

  @Output('blur') blur = new EventEmitter();

  @Output('rightIconClick') rightIconClick = new EventEmitter();
}
