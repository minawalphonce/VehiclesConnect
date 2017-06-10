import { browser, element, by } from 'protractor';

export class VehiclesConnectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('vc-root h1')).getText();
  }
}
