import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
  @Input() header!: HeaderComponent;
  @Input() displayMenu: boolean = false;

  hideMenu() {
    this.header.showMobileMenu();
  }
}