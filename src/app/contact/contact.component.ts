import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('messageInput') messageInput!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  initialImgSrc = 'assets/img/icons/arrow_up_white.png';
  hoverImgSrc ='assets/img/icons/arrow_up_blue.png';

  async sendMail() {
    console.log('sending mail', this.myForm);

    let nameInput = this.nameInput.nativeElement;
    let messageInput = this.nameInput.nativeElement;
    let sendButton = this.nameInput.nativeElement;
    nameInput.disable = true;
    messageInput.disable = true;
    sendButton.disable = true;
    // animation
    let formData = new FormData();
    formData.append('name', nameInput.value);
    formData.append('message', messageInput.value);
    // senden
    await fetch('https://tim-voigt.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: formData
      }
    );

    // text anzeigen gesendet
    nameInput.disable = false;
    messageInput.disable = false;
    sendButton.disable = false;
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
