import { NgGirlsWebsitePage } from './app.po';

describe('ng-girls-website App', () => {
  let page: NgGirlsWebsitePage;

  beforeEach(() => {
    page = new NgGirlsWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ngg works!');
  });
});
