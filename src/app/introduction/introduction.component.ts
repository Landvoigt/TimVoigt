import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {
  gitUrl = 'https://github.com/Landvoigt';
  linkedinUrl = 'https://github.com/Landvoigt';
  emailUrl = 'https://github.com/Landvoigt';

  redirectToGit() {
    window.location.href = this.gitUrl;
  }

  redirectToEmail() {
    window.location.href = this.emailUrl;
  }

  redirectToLinkedin() {
    window.location.href = this.linkedinUrl;
  }
}
