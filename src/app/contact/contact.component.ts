import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  isFormDisabled: boolean = false;

  @ViewChild('sendButton', { static: false }) sendButton!: ElementRef;
  
  initialImgSrc = 'assets/img/icons/arrow_up_white.png';
  hoverImgSrc = 'assets/img/icons/arrow_up_blue.png';

  async sendMail() {
    let sendButton = this.sendButton.nativeElement;
    this.isFormDisabled = true;
    sendButton.disabled = true;

    let formData = new FormData();
    formData.append('name', this.name);
    formData.append('message', this.message);
    formData.append('email', this.email);

    try {
      await fetch('https://tim-voigt.developerakademie.net/send_mail/send_mail.php',
        {
          method: 'POST',
          body: formData
        }
      );
    } catch (error) {
      console.error('Error sending mail:', error);
    }
    this.isFormDisabled = false;
    sendButton.disabled = false;
  }

  changeImage() {
    // Change the src to the hover image when hovering
    this.initialImgSrc = this.hoverImgSrc;
  }

  resetImage() {
    // Reset the src back to the initial image when not hovering
    this.initialImgSrc = 'assets/img/icons/arrow_up_white.png';
  }

  scrollTop() {
    window.scroll({ top: 0, left: 0 });
  }
}
