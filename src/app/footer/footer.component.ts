import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() showImprint: boolean | undefined;

  gitUrl = 'https://github.com/Landvoigt';
  linkedinUrl = 'https://github.com/Landvoigt';
  emailUrl = 'https://github.com/Landvoigt';

  toggleImprint() {
    console.log('works');
    this.showImprint = !this.showImprint;
  }

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