import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { Award, BrainCircuit, BrainCircuitIcon, ChevronRight, List, LucideAngularModule, Menu, Monitor, Smartphone, Sparkles, Wand2, X } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({
        BrainCircuit,
        Sparkles,
        X,
        Monitor,
        Smartphone,
        Award,
        ChevronRight,
        List,
        BrainCircuitIcon,
      })
    )
  ]
};
