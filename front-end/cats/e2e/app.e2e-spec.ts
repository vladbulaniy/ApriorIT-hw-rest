import { CatsPage } from './app.po';

describe('cats App', () => {
  let page: CatsPage;

  beforeEach(() => {
    page = new CatsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
