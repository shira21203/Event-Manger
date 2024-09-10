import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  isPopupVisible: boolean = false;
  popupTitle: string = '';
  popupMessage: string = '';

  showPopup(title: string, message: string) {
    this.popupTitle = title;
    this.popupMessage = message;
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }
}
