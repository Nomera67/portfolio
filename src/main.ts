import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ThemeService } from './app/services/switch-mode/theme.service';


platformBrowserDynamic().bootstrapModule(AppModule)
  .then((moduleRef) => {
    const themeService = moduleRef.injector.get(ThemeService);
    themeService.getIsSwitchMode().subscribe((isSwitchMode: boolean) => {
      const body = document.getElementsByTagName('body')[0];
      body.classList.toggle('light', isSwitchMode);
      body.classList.toggle('dark', !isSwitchMode);
    });
  })

  .catch(err => console.error(err));
