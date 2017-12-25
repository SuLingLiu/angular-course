import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();       //禁用角开发模式，它会关闭框架中的断言和其他检查
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
