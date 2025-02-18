import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

export class CustomMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    // Log the missing key to console
    console.warn(`Missing translation key: "${params.key}" for language: "${params.translateService.currentLang}"`);

    // Return a formatted string to make it visible in the UI
    return `⚠️ Missing: ${params.key}`;
  }
}
