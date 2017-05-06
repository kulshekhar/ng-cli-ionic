import { NgCliIonicPage } from './app.po';

describe('ng-cli-ionic App', () => {
  let page: NgCliIonicPage;

  beforeEach(() => {
    page = new NgCliIonicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
