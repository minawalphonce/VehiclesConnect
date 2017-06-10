import { VehiclesConnectPage } from './app.po';

describe('vehicles-connect App', () => {
  let page: VehiclesConnectPage;

  beforeEach(() => {
    page = new VehiclesConnectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('vc works!');
  });
});
