import { NgFoxmindedPage } from './app.po';

describe('ng-foxminded App', () => {
  let page: NgFoxmindedPage;

  beforeEach(() => {
    page = new NgFoxmindedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
