import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular'; // تصحيح مسار الاستيراد هنا لضمان عمل الـ Build بدون مشاكل
import { UiService } from '../../../shared/services/ui';
import { Header } from '../../../header/header';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, Header],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  // حقن الخدمة المشتركة الخاصة بك
  public uiService = inject(UiService);

  // حالة التحكم الداخلية في عملية التوليد الخاصة بالـ AI
  userInput = '';
  isLoading = false;
  hasResponse = false;
  aiResponseHtml = '';
  isScrolled = false;

  // قائمة الإحصائيات
  readonly statsList = [
    { count: '150+', title: 'Projects Delivered' },
    { count: '2.5k+', title: 'Students Trained' },
    { count: '98%', title: 'Client Success' },
    { count: '12+', title: 'Global Instructors' }
  ];

  get mode() { return this.uiService.modalMode(); }
  get isOpen() { return this.uiService.isModalOpen(); }

  // مراقبة التمرير لتغيير خلفية الـ Navbar
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 40;
  }

  // فتح المودال عبر الخدمة الخاصة بك
  openAIModal(mode: 'architect' | 'mentor') {
    this.uiService.openModal(mode);
  }

  // إغلاق المودال وإعادة تعيين البيانات
  closeAIModal() {
    this.uiService.closeModal();
    this.resetAIModal();
  }

  resetAIModal() {
    this.userInput = '';
    this.isLoading = false;
    this.hasResponse = false;
    this.aiResponseHtml = '';
  }

  // محاكاة معالجة بيانات الـ AI
  async generateAI() {
    if (!this.userInput.trim()) return;

    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      this.hasResponse = true;

      // قراءة الـ Mode الحالي من الخدمة الخاصة بك (بافتراض أنها تستخدم Signals أو متغير عادي)
      // إذا كانت الخدمة تعتمد على Signal، يمكنك كتابة: this.uiService.modalMode()
      const currentMode = this.uiService.modalMode();

      if (currentMode === 'architect') {
        this.aiResponseHtml = `
          <h4 class="text-xl font-bold text-white mb-2">Executive Summary</h4>
          <p class="mb-4">Your idea has great market potential. We recommend a full-stack architecture tailored for scalability.</p>
          <h4 class="text-xl font-bold text-white mb-2">Recommended Tech Stack</h4>
          <ul class="list-disc ml-5 mb-4">
            <li><strong>Frontend:</strong> Angular 17+ with TailwindCSS</li>
            <li><strong>Backend:</strong> Node.js (NestJS framework)</li>
            <li><strong>Database:</strong> PostgreSQL hosted on Supabase</li>
          </ul>
        `;
      } else {
        this.aiResponseHtml = `
          <h4 class="text-xl font-bold text-white mb-2">Your Custom 4-Week Roadmap</h4>
          <p class="mb-2"><strong>Week 1:</strong> Core Architecture & Component Lifecycle Setup</p>
          <p class="mb-2"><strong>Week 2:</strong> State Management, Directives & Services</p>
          <p class="mb-2"><strong>Week 3:</strong> API System Integration & Angular Forms</p>
          <p class="mb-4"><strong>Week 4:</strong> Production Build, SEO Optimization & Cloud Deployment</p>
        `;
      }
    }, 1500);
  }
}