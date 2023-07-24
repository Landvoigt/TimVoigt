import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  initialImgSrc = 'assets/img/icons/bars_white.png';
  hoverImgSrc = 'assets/img/icons/bars_blue.png';
  displayMenu: boolean = false;

  showMobileMenu() {
    this.displayMenu = !this.displayMenu;
  }

  changeImage() {
    // Change the src to the hover image when hovering
    this.initialImgSrc = this.hoverImgSrc;
  }

  resetImage() {
    // Reset the src back to the initial image when not hovering
    this.initialImgSrc = 'assets/img/icons/bars_white.png';
  }

  scrollTop() {
    window.scroll({ top: 0, left: 0 });
  }
}
