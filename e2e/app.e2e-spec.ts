import { SqueakPage } from './app.po';

describe('squeak App', () => {
  let page: SqueakPage;

  beforeEach(() => {
    page = new SqueakPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
