import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-outline',
  templateUrl: './button-outline.component.html',
  styleUrls: ['./button-outline.component.css'],
})
export class ButtonOutlineComponent {
  @Input() title: string = '';
  @Output() submit = new EventEmitter();

  constructor() { }

  onSubmit(): void {
    this.submit.emit();
  }


}
