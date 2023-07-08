import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
} from '@ngx-translate/core';

export class CustomMissingTranslationHandler
  implements MissingTranslationHandler
{
  handle(params: MissingTranslationHandlerParams) {
    console.error(`Missing translation for key: ${params.key}`);
    return 'Translation unavailable'; // Return the key as a fallback value
  }
}
