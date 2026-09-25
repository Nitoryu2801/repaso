import { Component } from '@angular/core';
import { ToolbarContentComponent } from '../toolbar-content/toolbar-content';
import { FooterContentComponent } from '../footer/footer-content';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ToolbarContentComponent, FooterContentComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class LayoutComponent {}
