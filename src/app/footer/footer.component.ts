import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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
  
  scrollTop() {
    window.scroll({ top: 0, left: 0 });
  }
}