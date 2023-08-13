import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('250ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('250ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})

export class HeaderComponent implements OnInit {
  currentFragment: string = '';

  initialImgSrc = 'assets/img/icons/bars_white.png';
  hoverImgSrc = 'assets/img/icons/bars_blue.png';
  displayMenu: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      this.currentFragment = fragment!;
    });
  }

  public showMobileMenu(): void {
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
