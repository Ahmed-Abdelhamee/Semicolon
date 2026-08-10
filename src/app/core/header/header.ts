import { Component, HostListener, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular/src/icons';
import { NgClass } from '@angular/common';
import { UiService } from '../../shared/services/ui';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, NgClass, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private uiService = inject(UiService);
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 40;
  }

  openAIModal(mode: 'architect' | 'mentor') {
    this.uiService.openModal(mode);
  }
}
