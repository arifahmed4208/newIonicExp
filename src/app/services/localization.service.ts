import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  constructor(private translate: TranslateService) {}

  localize(key: string): string {
    let value = '';
    this.translate
      .get(key)
      .subscribe((res: string) => {
        console.log(res);
        value = res;
        //=> 'hello world'
      })
      .unsubscribe();
    return value;
  }
}
