import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cancel-button',
  standalone: true,
  templateUrl: './cancel-button.component.html',
  styleUrls: ['./cancel-button.component.css'],
})
export class CancelButtonComponent {
  @Output() onClick = new EventEmitter<void>();

  onCancelClick() {
    this.onClick.emit();
  }
}