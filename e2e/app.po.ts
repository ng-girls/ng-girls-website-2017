import { browser, element, by } from 'protractor';

export class NgGirlsWebsitePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngg-root h1')).getText();
  }
}
