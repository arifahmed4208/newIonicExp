import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class CultureService {
  constructor(private translate: TranslateService) {
    this.initTranslation();
  }

  initTranslation() {
    if (!localStorage.getItem('ln')) {
      localStorage.setItem('ln', 'en');
      this.translate.setDefaultLang('en'); // add this
    } else {
      this.translate.use(localStorage.getItem('ln') as string);
    }
  }

  changeLanguage(key: string) {
    localStorage.setItem('ln', key);
    this.translate.use(localStorage.getItem('ln') as string);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  localize(key: string): Promise<string> {
    return new Promise<string>((resolve) => {
      this.translate
        .get(key)
        .subscribe((res: string) => {
          console.log(res);

          resolve(res);
          //=> 'hello world'
        })
        .unsubscribe();
    });

    // let value = '';
    // console.log(value);
    // this.translate
    //   .get(key)
    //   .subscribe((res: string) => {
    //     setTimeout(() => {
    //       console.log(res);
    //       value = res;
    //       console.log(value);
    //     }, 1000);
    //   })
    //   .unsubscribe();
    // console.log(value);
    // return value;
  }
}
