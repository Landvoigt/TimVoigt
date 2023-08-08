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

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('messageInput') messageInput!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  initialImgSrc = 'assets/img/icons/arrow_up_white.png';
  hoverImgSrc = 'assets/img/icons/arrow_up_blue.png';

  async sendMail() {
    let nameInput = this.nameInput.nativeElement;
    let emailInput = this.emailInput.nativeElement;
    let messageInput = this.messageInput.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    this.disableInputs(nameInput, emailInput, messageInput, sendButton);

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
    this.enableInputs(nameInput, emailInput, messageInput, sendButton);
  }

  disableInputs(nameInput: { disabled: boolean; }, emailInput: { disabled: boolean; }, messageInput: { disabled: boolean; }, sendButton: { disabled: boolean; }) {
    nameInput.disabled = true;
    emailInput.disabled = true;
    messageInput.disabled = true;
    sendButton.disabled = true;
  }

  enableInputs(nameInput: { disabled: boolean; }, emailInput: { disabled: boolean; }, messageInput: { disabled: boolean; }, sendButton: { disabled: boolean; }) {
    nameInput.disabled = false;
    emailInput.disabled = false;
    messageInput.disabled = false;
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
