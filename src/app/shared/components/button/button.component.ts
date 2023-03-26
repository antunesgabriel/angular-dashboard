import { Component, Input, Output, EventEmitter } from '@angular/core';

type ButtonAppearance = 'primary' | 'secondary' | 'white' | 'danger' | 'info';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input('appearance') appearance: ButtonAppearance = 'primary';

  @Input('label') label: string = '';

  @Input('class') class: string = '';

  @Input('isFull') isFull: boolean = false;

  @Input('buttonType') buttonType: string = 'button';

  @Output()
  click = new EventEmitter();

  onClick() {
    this.click.emit();
  }
}
