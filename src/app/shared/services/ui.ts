import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  // Signals لإدارة حالة المودال ونوعه ديناميكياً
  isModalOpen = signal<boolean>(false);
  modalMode = signal<'architect' | 'mentor'>('architect');

  openModal(mode: 'architect' | 'mentor') {
    this.modalMode.set(mode);
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
