import { AngularTodosPage } from './app.po';

describe('angular-todos App', () => {
  let page: AngularTodosPage;

  beforeEach(() => {
    page = new AngularTodosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
