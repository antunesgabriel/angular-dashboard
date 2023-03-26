import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { ClickOutsideDirective } from './directives/click-outside.directive';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [ClickOutsideDirective, ButtonComponent, InputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, AngularSvgIconModule.forRoot()],
  exports: [ClickOutsideDirective, ButtonComponent, InputComponent],
})
export class SharedModule {}
