import { AnimatePage } from './app.po';

describe('animate App', () => {
  let page: AnimatePage;

  beforeEach(() => {
    page = new AnimatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
