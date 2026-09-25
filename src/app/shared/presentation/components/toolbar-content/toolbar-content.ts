import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslatePipe } from '@ngx-translate/core';
import { LogoDevApiService } from '../../../infrastructure/logo-dev-api';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher';

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [MatToolbarModule, TranslatePipe, LanguageSwitcherComponent],
  templateUrl: './toolbar-content.html',
  styleUrl: './toolbar-content.css'
})
export class ToolbarContentComponent {
  private logoService = inject(LogoDevApiService);
  logoUrl = this.logoService.getLogoUrl();
}
